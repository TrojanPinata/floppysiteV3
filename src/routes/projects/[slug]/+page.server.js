import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
	const { slug } = params;

	const filePath = path.resolve('src/lib/content', `${slug}.md`);

	if (!fs.existsSync(filePath)) {
		throw error(404, 'Post not found');
	}

	const file = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(file);
	const html = marked(content);

	return {
		meta: data,
		content: html
	};
}
