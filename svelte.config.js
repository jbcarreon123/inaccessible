import { mdsvex } from "mdsvex";
import adapter from 'svelte-adapter-nekoweb';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { env } from "bun";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [vitePreprocess(), mdsvex()],

    kit: {
		adapter: adapter({
			apiKey: env.NEKOWEB_APIKEY,
			cookie: env.NEKOWEB_COOKIE
		})
	},

    compilerOptions: {
		// disable all warnings
		warningFilter: (warning) => false
	},

	handleHttpError: ({ path, referrer, message }) => {
		return;
	},

    extensions: [".svelte", ".svx"]
};

export default config;
