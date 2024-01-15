/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'main-purple': '#986F93',
				'main-pink': '#c97b97',
				'cta-purple': '#924BB4',
				'light-pink': '#F1C1F1',
			},
		},
	},
	plugins: [],
}
