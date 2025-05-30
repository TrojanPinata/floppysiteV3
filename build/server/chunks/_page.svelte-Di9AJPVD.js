import { p as push, e as ensure_array_like, c as pop } from './index2-C0ndmnsZ.js';
import { p as projects, a as attr } from './projects-C56vPLvN.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  const sorted = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const each_array = ensure_array_like(sorted);
  $$payload.out += `<a href="/" class="svelte-16q6noj"><button class="fixed top-4 left-4 text-sm px-4 py-2 rounded hover:bg-cyan-100 transition svelte-16q6noj">← Back</button></a> <div class="mx-auto px-12 svelte-16q6noj"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-30 svelte-16q6noj"><div class="rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center text-center hover:bg-gray-50 transition duration-200 svelte-16q6noj"><div class="p-4 svelte-16q6noj"><p class="typewriter-header text-4xl font-semibold svelte-16q6noj">Projects</p></div></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<a${attr("href", `/projects/${project.slug}`)} class="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-200 svelte-16q6noj"><img${attr("src", project.image)}${attr("alt", project.title)} class="w-full h-64 sm:h-48 md:h-64 lg:h-64 2xl:h-82 object-cover svelte-16q6noj"/> <div class="p-4 svelte-16q6noj"><h3 class="text-lg font-semibold svelte-16q6noj">${escape_html(project.title)}</h3> <p class="text-sm text-gray-500 svelte-16q6noj">${escape_html(project.date)}</p></div></a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Di9AJPVD.js.map
