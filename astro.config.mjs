// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// DOCS_BASE lets a preview build live under another path; the site itself is afterdark-workers.github.io
export default defineConfig({
	site: 'https://afterdark-workers.github.io',
	base: process.env.DOCS_BASE || '/',
	integrations: [
		starlight({
			title: 'afterdark-workers',
			description: 'Ready-to-build serverless GPU workers for 18+ image and video models.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/afterdark-workers' }],
			sidebar: [
				{ label: 'Models', slug: 'models' },
				{ label: 'Run on RunPod', slug: 'runpod' },
				{ label: 'Run on Modal', slug: 'modal' },
			],
		}),
	],
});
