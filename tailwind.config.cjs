module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
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
