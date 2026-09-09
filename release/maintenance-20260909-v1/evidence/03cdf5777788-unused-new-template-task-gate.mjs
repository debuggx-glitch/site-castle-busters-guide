#!/usr/bin/env node
// Validate review evidence, not player satisfaction: semantic review remains independent.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";

export function verifyTaskReview(root, guides) {
  root = fs.realpathSync(root);
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const text = (value) => typeof value === "string" && value.trim().length > 0;
  const list = (value) => Array.isArray(value) ? value : [];
  let review;
  try { review = JSON.parse(fs.readFileSync(path.join(root, "config/content-task-review.json"), "utf8")); }
  catch (error) { return [`task review missing or invalid: ${error.message}`]; }
  if (!review || typeof review !== "object" || Array.isArray(review)) return ["invalid task review object"];
  if (!Array.isArray(guides) || guides.length === 0) return ["nonempty guide inventory required"];
  check(review.schemaVersion === "content-task-review.v1", "invalid task review schemaVersion");
  check(review.fixture === false, "fixture evidence cannot release content");
  const files = new Set();
  for (const file of list(review.reviewedFiles)) {
    if (!file || !text(file.path)) { errors.push("invalid reviewed file"); continue; }
    try {
      const absolute = fs.realpathSync(path.resolve(root, file.path));
      const relative = path.relative(root, absolute);
      if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("outside site root");
      const bytes = fs.readFileSync(absolute);
      check(bytes.length > 0, `empty evidence: ${file.path}`);
      const hash = `sha256:${crypto.createHash("sha256").update(bytes).digest("hex")}`;
      check(hash === file.sha256, `stale evidence: ${file.path}`);
      check(!files.has(file.path), `duplicate evidence: ${file.path}`);
      files.add(file.path);
    } catch (error) { errors.push(`evidence ${file.path}: ${error.message}`); }
  }
  for (const file of ["lib/guides.ts", "app/page.tsx", "app/layout.tsx", "app/guides/[slug]/page.tsx", "app/globals.css"]) {
    check(files.has(file), `review must bind current source: ${file}`);
  }
  const refs = (values, label) => {
    check(list(values).length > 0, `${label}: evidence required`);
    for (const ref of list(values)) check(files.has(ref), `${label}: unbound evidence ${ref}`);
  };
  const articles = list(review.articles);
  const slugs = articles.map((article) => article?.slug);
  check(new Set(slugs).size === slugs.length, "duplicate reviewed slug");
  check(slugs.length === guides.length && guides.every((guide) => slugs.includes(guide.slug)), "review must cover exactly all guides");
  for (const article of articles) {
    if (!article || typeof article !== "object") { errors.push("invalid article review"); continue; }
    const label = article.slug;
    check(article.verdict === "pass", `${label}: task review not passed`);
    check(text(article.writerInstanceId) && text(article.reviewerInstanceId) && article.writerInstanceId !== article.reviewerInstanceId, `${label}: independent reviewer required`);
    check(text(article.reviewedAt) && Number.isFinite(Date.parse(article.reviewedAt)), `${label}: review time required`);
    check(text(article.entryQuery) && text(article.startingState), `${label}: player scenario required`);
    refs(article.desktopEvidenceRefs, `${label} desktop`);
    refs(article.mobileEvidenceRefs, `${label} mobile`);
    const tasks = list(article.tasks);
    check(tasks.length > 0, `${label}: tasks required`);
    check(new Set(tasks.map((task) => task?.taskId)).size === tasks.length, `${label}: duplicate task IDs`);
    for (const task of tasks) {
      if (!task || typeof task !== "object") { errors.push(`${label}: invalid task`); continue; }
      check(text(task.taskId) && text(task.goal), `${label}: task identity and goal required`);
      check(task.verdict === "pass", `${label}/${task.taskId}: unresolved player task`);
      check(list(task.successCriteria).length > 0 && task.successCriteria.every(text), `${label}: success criteria required`);
      refs(task.evidenceRefs, `${label}/${task.taskId}`);
      check(typeof task.visualRequired === "boolean", `${label}: visual requirement must be explicit`);
      if (task.visualRequired) {
        refs(task.assetPaths, `${label}/${task.taskId} assets`);
        for (const asset of list(task.assetPaths)) check(text(asset) && asset.startsWith("public/") && /\.(webp|png|jpe?g|svg)$/i.test(asset), `${label}: invalid visual asset ${asset}`);
        check(task.mobileLegible === true, `${label}/${task.taskId}: mobile visual not verified`);
      } else check(text(task.visualExceptionReason), `${label}: missing visual exception reason`);
    }
    check(Array.isArray(article.issues), `${label}: explicit issue inventory required`);
    const issues = list(article.issues);
    check(new Set(issues.map((issue) => issue?.issueId)).size === issues.length, `${label}: duplicate issue IDs`);
    for (const issue of issues) {
      if (!issue || typeof issue !== "object") { errors.push(`${label}: invalid issue`); continue; }
      check(text(issue.issueId) && text(issue.requestedCapability) && text(issue.acceptanceCriteria) && text(issue.assigneeRole), `${label}: actionable issue request required`);
      check(issue.status === "closed", `${label}/${issue.issueId}: issue is still open`);
      check(issue.retestVerdict === "pass", `${label}/${issue.issueId}: independent retest missing`);
      check(text(issue.fixerInstanceId) && text(issue.retesterInstanceId) && issue.fixerInstanceId !== issue.retesterInstanceId && issue.retesterInstanceId !== article.writerInstanceId, `${label}/${issue.issueId}: repair cannot self-approve`);
      refs(issue.retestEvidenceRefs, `${label}/${issue.issueId} retest`);
    }
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const root = process.cwd();
    const source = fs.readFileSync(path.join(root, "lib/guides.ts"), "utf8");
    const payload = source.match(/export const guides:Guide\[\]=(.*);\nexport function getGuide/s);
    if (!payload) throw new Error("guides payload not found");
    const errors = verifyTaskReview(root, JSON.parse(payload[1]));
    if (errors.length) throw new Error(errors.join("; "));
    console.log("CONTENT TASK REVIEW GATE: PASS (evidence consistency; independent semantic review still required)");
  } catch (error) {
    console.error(`CONTENT TASK REVIEW GATE: FAIL ${error.message}`);
    process.exitCode = 1;
  }
}
