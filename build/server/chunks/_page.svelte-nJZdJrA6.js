import { h as head, p as push, e as ensure_array_like, c as pop } from './index2-C0ndmnsZ.js';
import { p as projects, a as attr } from './projects-C56vPLvN.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Opener($$payload) {
  $$payload.out += `<div class="svelte-1n02sil"><section class="bg-neutral-100 h-screen flex items-center justify-center svelte-1n02sil"><div class="text-center svelte-1n02sil"><h1 class="typewriter-header text-6xl font-mono svelte-1n02sil"></h1> <div class="text-2xl font-mono relative w-1/2 mx-auto mt-2 svelte-1n02sil"><p class="svelte-1n02sil">This is my personal website written in Svelte and is the third iteration of my FloppySite project, a website which was made to run off of a floppy disk.</p> <p class="svelte-1n02sil">All of the projects I have done are below.</p></div></div></section></div>`;
}
function Projects($$payload, $$props) {
  push();
  const sorted = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latest = sorted.slice(0, 7);
  const each_array = ensure_array_like(latest);
  $$payload.out += `<div class="mx-auto px-4 sm:px-6 md:px-8 lg:px-12"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-30"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<a${attr("href", `/projects/${project.slug}`)} class="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-200"><img${attr("src", project.image)}${attr("alt", project.title)} class="w-full h-64 sm:h-48 md:h-64 lg:h-64 2xl:h-82 object-cover rounded-xl"/> <div class="p-4"><h3 class="text-lg font-semibold">${escape_html(project.title)}</h3> <p class="text-sm text-gray-500">${escape_html(project.date)}</p></div></a>`;
  }
  $$payload.out += `<!--]--> <a href="/projects" class="rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center text-center hover:bg-gray-50 transition duration-200"><div class="p-4"><p class="text-lg font-medium">View All Projects →</p></div></a></div></div>`;
  pop();
}
function About($$payload) {
  let current = 0;
  let images = ["/BH.jpg", "/BH2.png", "/BH3.png"];
  $$payload.out += `<div><section class="bg-neutral-100 flex flex-col lg:flex-row items-center mt-15 mb-15 w-full max-w-6xl mx-auto justify-center font-mono px-4 light:bg-neutral-100"><div class="w-full flex justify-center"><button><img${attr("src", images[current])} alt="Brian Hill" class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[48em] h-auto rounded shadow"/></button></div> <div class="mt-6 lg:mt-0 lg:pl-16 text-center lg:text-left"><h3 class="text-3xl font-mono font-bold inline-block">Who am I?</h3> <p class="about_desc text-lg font-mono mt-2 mb-8">Hi, I'm Brian Hill, a Software Developer and Computer Engineer with a focus on embedded systems and hardware design. I spend a lot of time outside of work/school doing projects I find fun - which is what ends up here. All of my projects are on Github and if you have any specific questions, shoot me an email.</p> <a href="/bhill_resume.pdf" class="button bg-black text-neutral-100 inline-block px-6 py-2 font-mono text-sm font-bold transition-colors duration-200" target="_blank" rel="noopener noreferrer">Resume PDF</a></div></section></div>`;
}
function Footer($$payload) {
  const icons = [
    {
      name: "GitHub",
      href: "https://github.com/TrojanPinata",
      icon: "mdi:github"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brian-hill-0082161a3/",
      icon: "mdi:linkedin"
    },
    {
      name: "Email",
      href: "mailto:hillbr20@gmail.com",
      icon: "mdi:email"
    }
  ];
  const each_array = ensure_array_like(icons);
  $$payload.out += `<div><footer class="bg-black text-neutral-600 w-full h-[4em] flex flex-col items-center justify-center px-4 font-mono"><div class="flex gap-4 mt-1"><p class="text-sm">Made With Floppy Disks • ©2025 Brian Hill •</p> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, href, icon } = each_array[$$index];
    $$payload.out += `<a${attr("href", href)} target="_blank" rel="noopener noreferrer"${attr("aria-label", name)} class="text-lg hover:text-gray-400 transition-colors"><iconify-icon${attr("icon", icon)} class="svelte-upsgr"></iconify-icon></a>`;
  }
  $$payload.out += `<!--]--></div></footer></div>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>&lt;Brian Hill's FloppySite></title>`;
    $$payload2.out += `<meta name="description" content=""/>`;
  });
  $$payload.out += `<div class="app">`;
  Opener($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-nJZdJrA6.js.map
