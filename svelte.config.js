import static_adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: static_adapter(),
    prerender: {
      default: true,
    },
    paths: {
      base: production ? '/portfolio' : '',
    },
  },
};

export default config;
