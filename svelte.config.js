import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';


const config = {
    kit: {
		paths: {
            base: dev ? '' : '/onboarding',
		},
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	},
	preprocess: vitePreprocess()
};

export default config;