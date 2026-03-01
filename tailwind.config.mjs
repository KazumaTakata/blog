import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#ececf1',
          200: '#d9d9e3',
          300: '#c5c5d2',
          400: '#acacbe',
          500: '#8e8ea0',
          600: '#6e6e80',
          700: '#4a4a5a',
          800: '#2d2d3a',
          900: '#1a1a2e',
          950: '#0d0d1a',
        },
        accent: {
          400: '#6ee7b7',
          500: '#10b981',
          600: '#059669',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1a1a2e',
            '--tw-prose-headings': '#0d0d1a',
            '--tw-prose-lead': '#2d2d3a',
            '--tw-prose-links': '#059669',
            '--tw-prose-bold': '#0d0d1a',
            '--tw-prose-counters': '#2d2d3a',
            '--tw-prose-bullets': '#4a4a5a',
            '--tw-prose-hr': '#d9d9e3',
            '--tw-prose-quotes': '#1a1a2e',
            '--tw-prose-quote-borders': '#059669',
            '--tw-prose-captions': '#2d2d3a',
            '--tw-prose-code': '#059669',
            '--tw-prose-pre-code': '#1a1a2e',
            '--tw-prose-pre-bg': '#f7f7f8',
            '--tw-prose-th-borders': '#c5c5d2',
            '--tw-prose-td-borders': '#d9d9e3',
            'h1': {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            'h2': {
              fontWeight: '600',
              letterSpacing: '-0.025em',
              marginTop: '2em',
              marginBottom: '1em',
            },
            'h3': {
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            'p': {
              lineHeight: '1.8',
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'a': {
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderBottomColor: '#059669',
              },
            },
            'code': {
              backgroundColor: '#ececf1',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre': {
              backgroundColor: '#ececf1',
              border: '1px solid #d9d9e3',
              borderRadius: '0.5rem',
            },
            'blockquote': {
              fontStyle: 'normal',
              borderLeftWidth: '3px',
              borderLeftColor: '#10b981',
              paddingLeft: '1.5em',
            },
            'ul': {
              paddingLeft: '1.5em',
            },
            'ol': {
              paddingLeft: '1.5em',
            },
            'li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#d9d9e3',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#c5c5d2',
            '--tw-prose-links': '#6ee7b7',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#8e8ea0',
            '--tw-prose-bullets': '#6e6e80',
            '--tw-prose-hr': '#2d2d3a',
            '--tw-prose-quotes': '#c5c5d2',
            '--tw-prose-quote-borders': '#6ee7b7',
            '--tw-prose-captions': '#8e8ea0',
            '--tw-prose-code': '#6ee7b7',
            '--tw-prose-pre-code': '#d9d9e3',
            '--tw-prose-pre-bg': '#1a1a2e',
            '--tw-prose-th-borders': '#4a4a5a',
            '--tw-prose-td-borders': '#2d2d3a',
            'code': {
              backgroundColor: '#2d2d3a',
            },
            'pre': {
              backgroundColor: '#1a1a2e',
              border: '1px solid #2d2d3a',
            },
            'a:hover': {
              borderBottomColor: '#6ee7b7',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
