// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react(), vue(), mdx()]
});