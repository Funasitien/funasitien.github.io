module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
    	themes: ["pastel", "night"],
		darkTheme: "night",
  	},
	darkMode: ['class', '[data-theme="night"]']
};
