import { h as head } from './index2-C0ndmnsZ.js';

function _error($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>&lt;404></title>`;
    $$payload2.out += `<meta name="description" content=""/>`;
  });
  $$payload.out += `<div class="bg-neutral-100 h-screen flex items-center justify-center text-center font-mono font-semibold pb-40"><div class="nopage"><h3 class="mb-2 bg-black text-neutral-100 px-1 py-1 w-fit mx-auto text-xl">&lt;404></h3> <img src="/taiho.gif" alt="uh oh"/> <p class="mt-2 text-xl">Uh Oh. This page isn't available.</p></div></div>`;
}

export { _error as default };
//# sourceMappingURL=_error.svelte-DuRkBtGo.js.map
