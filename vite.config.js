import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
	  lib: {
		entry: path.resolve(__dirname, 'src/index.js'),
		name: 'OnBoardingLib',
		fileName: (format) => `onboarding-lib.${format}.js`
	  },
	  rollupOptions: {
		external: ['svelte'],
		output: {
	      inlineDynamicImports:false,
		  format: 'esm',
		  globals: {
			svelte: 'svelte'
		  }
		}
	  }
	}
  });