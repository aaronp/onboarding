import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, 'src/lib'),
			$backend: path.resolve(__dirname, '../onboarding-backend/js/target/scala-3.4.1/app-fastopt'),
		},
	}
  });