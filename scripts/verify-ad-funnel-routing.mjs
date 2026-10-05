// Offline source regression only: no Google Analytics or ad network requests.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {stripTypeScriptTypes} from "node:module";
import vm from "node:vm";

const measurementId = "G-REGRESSION";
const source = readFileSync(new URL("../components/ad-funnel.ts", import.meta.url), "utf8");
const executable = stripTypeScriptTypes(source.replace(/^import .*;\n/gm, ""), {mode: "strip"})
  .replace("export function useAdFunnel", "function useAdFunnel");

let cursor = 0;
let effects = [];
const cells = [];
const observers = [];
const hooks = {
  useRef(value) {
    const index = cursor++;
    return cells[index] ??= {current: value};
  },
  useState(value) {
    const index = cursor++;
    if (!(index in cells)) cells[index] = value;
    return [cells[index], (next) => { cells[index] = next; }];
  },
  useCallback(callback) { return callback; },
  useEffect(effect) { effects.push(effect); },
};

class IntersectionObserverStub {
  constructor(callback) {
    this.callback = callback;
    observers.push(this);
  }
  observe() {}
  disconnect() {}
}

const context = vm.createContext({
  ...hooks,
  site: {ga4MeasurementId: measurementId},
  usePathname: () => "/guides/castle-busters-tier-list/",
  matchMedia: () => ({matches: false}),
  IntersectionObserver: IntersectionObserverStub,
  setTimeout(callback) { callback(); return 1; },
  clearTimeout() {},
}, {codeGeneration: {strings: false, wasm: false}});
context.window = context;
vm.runInContext(`${executable}\nglobalThis.testHook = useAdFunnel;`, context, {timeout: 1000});

function render() {
  cursor = 0;
  effects = [];
  const handlers = context.testHook({
    siteId: "site_castle_busters_loadout_guide_001",
    placementName: "guide_native_mid",
    placement: {placementId: "31070673", format: "native"},
    viewRef: {current: {}},
  });
  for (const effect of effects) effect();
  return handlers;
}

let handlers = render();
handlers.onScriptLoad();
handlers.onScriptLoad();
handlers.onScriptError();
handlers.onScriptError();
handlers = render();
assert.equal(observers.length, 1);
observers[0].callback([{isIntersecting: true, intersectionRatio: 0.5}]);
observers[0].callback([{isIntersecting: true, intersectionRatio: 1}]);

const events = Array.from(context.dataLayer, (entry) => {
  assert.equal(Object.prototype.toString.call(entry), "[object Arguments]");
  return {command: entry[0], name: entry[1], parameters: entry[2]};
});
assert.deepEqual(events.map(({name}) => name), [
  "ad_slot_eligible",
  "ad_script_loaded",
  "ad_script_error",
  "ad_slot_viewable",
]);

const expectedParameters = {
  send_to: measurementId,
  site_id: "site_castle_busters_loadout_guide_001",
  ad_placement: "guide_native_mid",
  ad_format: "native",
  adsterra_placement_id: "31070673",
  page_type: "guide",
  page_path: "/guides/castle-busters-tier-list/",
  device_class: "desktop",
  render_context: "standard",
};
function assertDestinations(records) {
  for (const event of records) {
    assert.equal(event.command, "event");
    assert.equal(event.parameters.send_to, measurementId);
  }
}
assertDestinations(events);
for (const event of events) assert.deepEqual({...event.parameters}, expectedParameters);
assert.throws(() => assertDestinations([{...events[0], parameters: {...events[0].parameters, send_to: undefined}}]));
assert.throws(() => assertDestinations([{...events[0], parameters: {...events[0].parameters, send_to: "G-WRONG"}}]));

console.log(JSON.stringify({
  status: "passed",
  source: "components/ad-funnel.ts",
  runtime: process.version,
  eventCount: events.length,
  externalRequests: 0,
  analyticsEventsSent: 0,
  adRequestsSent: 0,
}));
