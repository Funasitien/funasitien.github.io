module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		function ({ addUtilities }) {
			addUtilities({
				'.mask-custom': {
					"mask-image": `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none"><path fill="%23D9D9D9" d="M0 20C0 8.954 8.954 0 20 0h120c20 0 20 20 20 20 0 11.046 8.954 20 20 20 0 0 20 0 20 19.5V180c0 11.046-8.954 20-20 20H58c-18 0-18-20-18-20 0-11.046-8.954-20-20-20 0 0-20 0-20-17V20Z"/></svg>');`,
					"-webkit-mask-image": `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none"><path fill="%23D9D9D9" d="M0 20C0 8.954 8.954 0 20 0h120c20 0 20 20 20 20 0 11.046 8.954 20 20 20 0 0 20 0 20 19.5V180c0 11.046-8.954 20-20 20H58c-18 0-18-20-18-20 0-11.046-8.954-20-20-20 0 0-20 0-20-17V20Z"/></svg>')`,
				}
				  
			})
		},
	],
	daisyui: {
		themes: [
			{
				pastel: {
					...require("daisyui/src/theming/themes")["pastel"],
					"base-100": "#f2f2f2",
					"--rounded-btn": "5rem",
					"neutral-content": "#0f5880",
				},
			},
			{
				night: {
					...require("daisyui/src/theming/themes")["night"],
					"base-300": "#283563",
					"base-200": "#1d2747",
					"--rounded-btn": "5rem",
				},
			},
		],
		darkTheme: "night",
	},
	darkMode: ['class', '[data-theme="night"]']
};
