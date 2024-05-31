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
    prerender: {
      crawl: true, // Enable crawling of your app to find all routes
      enabled: true,
      pages: ['*'] // Specify the routes to prerender, '*' for all routes
    },
	// compilerOptions: {
	//   // Disable a11y warnings
	//   a11y: false
	// },
	preprocess: vitePreprocess()
};

export default config;