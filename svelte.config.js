import adapter from '@sveltejs/adapter-static';

// see https://kit.svelte.dev/docs/adapter-static 
// for gh-pages hosting
// base should be https://aaronp.github.io/static-svelte


const dev = process.env.NODE_ENV === 'development';


const config = {
    kit: {
		paths: {
			// base: '/sveltekit-gh-pages',
			// /onboarding
            base: dev ? '' : '',
		},
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	}
};

export default config;