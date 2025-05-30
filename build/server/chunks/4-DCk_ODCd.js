import { e as error } from './index-CvuFLVuQ.js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

async function load({ params }) {
  const { slug } = params;
  const filePath = path.resolve("src/lib/content", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw error(404, "Post not found");
  }
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  const html = marked(content);
  return {
    meta: data,
    content: html
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-EHe9A8gQ.js')).default;
const server_id = "src/routes/projects/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/4.lrIWV2wS.js","_app/immutable/chunks/s6h7419X.js","_app/immutable/chunks/DU8CRx2a.js","_app/immutable/chunks/BK_94hKg.js","_app/immutable/chunks/C4Uw0Jwv.js","_app/immutable/chunks/Dkn5AGMm.js","_app/immutable/chunks/uP0WyKwo.js"];
const stylesheets = ["_app/immutable/assets/4.DPRjfjLr.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-DCk_ODCd.js.map
