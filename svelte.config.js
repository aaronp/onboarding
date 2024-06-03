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
	  handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404) {
          // Ignore 404 errors
          return;
        }

        // Log other errors for analysis
        console.error(
          `Received HTTP ${status} error while prerendering ${path} (referred from ${referrer})`
        );

        // You can choose to throw an error to stop the build
        // or simply return to continue the prerendering process
        throw new Error(`Failed to prerender ${path} due to HTTP ${status} error w/ reference type ${referenceType}`);
      },
      pages: ['*'] // Specify the routes to prerender, '*' for all routes
    },
	// compilerOptions: {
	//   // Disable a11y warnings
	//   a11y: false
	// },
	preprocess: vitePreprocess()
};

export default config;