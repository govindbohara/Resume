const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['src/pages/**/*.{jsx,tsx,ts,js}', 'src/components/**/*.{jsx,tsx,ts,js}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
			},
			backgroundImage: {
				hero: 'linear-gradient(to right,rgba(0,0,0,.8),rgba(0,0,0,.8)),url("/images/bg-hero.jpg")',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
