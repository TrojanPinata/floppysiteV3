import { p as push, f as bind_props, c as pop } from './index2-C0ndmnsZ.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<a href="/projects"><button class="fixed top-4 left-4 text-sm px-4 py-2 rounded hover:bg-cyan-100 transition">← Back</button></a> <div class="bg-neutral-100 font-mono px-4 py-12 min-h-screen"><section class="max-w-4xl mx-auto"><h1 class="text-4xl font-bold mb-2">${escape_html(data.meta.title)}</h1> <p class="text-sm text-gray-500 mb-6">${escape_html(data.meta.date)}</p> <div class="content space-y-6 text-base text-neutral-800 leading-relaxed">${html(data.content)}</div></section></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-EHe9A8gQ.js.map
