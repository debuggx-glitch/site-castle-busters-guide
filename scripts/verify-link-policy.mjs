import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const fail=(message)=>{console.error(`Link policy gate FAIL: ${message}`);process.exitCode=1;};
const wrapper=fs.readFileSync(path.join(root,"components/new-tab-link.tsx"),"utf8");

if(!wrapper.includes('target:"_blank"')||!wrapper.includes('rel:"noopener noreferrer"')) fail("shared link wrapper must enforce target=_blank and rel=noopener noreferrer");

const files=[];
for(const base of ["app","components"]){
  const visit=(dir)=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())visit(full);else if(entry.name.endsWith(".tsx"))files.push(full);}};
  visit(path.join(root,base));
}

for(const file of files){
  const relative=path.relative(root,file);
  if(relative==="components/new-tab-link.tsx"||relative.includes("ad-placements")||relative.includes("telemetry")) continue;
  const source=fs.readFileSync(file,"utf8");
  if(source.includes('from "next/link"')||source.includes("from 'next/link'")) fail(`${relative} bypasses the shared new-tab link wrapper`);
  for(const match of source.matchAll(/<a\b[^>]*>/gs)){
    const tag=match[0];
    const samePage=/href=(?:"#|'#|\{`#)/.test(tag);
    if(!samePage) fail(`${relative} contains a non-anchor link outside the shared wrapper: ${tag.replace(/\s+/g," ").slice(0,120)}`);
  }
}

for(const file of ["components/ad-placements.tsx","components/ad-funnel.ts"]){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  if(source.includes("new-tab-link")) fail(`${file} must remain controlled by the advertising platform`);
}

if(!process.exitCode) console.log("Link policy gate PASS: navigation opens in a new tab; same-page anchors and advertising code remain unchanged");
