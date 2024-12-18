import adapter from '@sveltejs/adapter-static';
import { vitePreprocess, svelte } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {

    preprocess: vitePreprocess(),
    // plugins: [svelte()],
    // optimizeDeps: {
    //     include: ['flowbite-svelte', 'flowbite']
    // },

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
        }),
        alias: {
            $routes: "./src/routes",
            "$routes/*": "./src/routes/index/*",
        },
        paths: {

            base: dev ? '' : process.env.BASE_PATH

        }
    },
};

export default config;
