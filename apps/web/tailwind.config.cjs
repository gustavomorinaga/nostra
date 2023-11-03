/** @type {import('tailwindcss').Config} */
export default {
	presets: [require('@nostra/ui/tailwind.config')],
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/components/**/*.{svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: "'Sora Variable', sans-serif",
				sans: "'Inter Variable', sans-serif",
				mono: "'JetBrains Mono', monospace",
				serif: "'Roboto Slab Variable', sans-serif"
			}
		}
	}
};
