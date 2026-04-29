import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Noto Sans JP'", 'ui-monospace', 'monospace'],
        sans: ["'JetBrains Mono'", "'Noto Sans JP'", 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [typography],
};
