//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/lib/content/projects.json');
const raw = fs.readFileSync(filePath, 'utf-8');
const projects = JSON.parse(raw);


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: {
			entries: [
				'*',
				...projects.map((p) => `/projects/${p.slug}`)
			]
		}
	}
};

export default config;
