const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		colors: {
			white: colors.white,
			blue: colors.blue,
			green: colors.green,
			gray: colors.warmGray,
			'svelte-prime': '#ff5030',
			rootjuice: '#553b2c',
			biogrow: '#2f6e3c',
			biobloom: '#e05522',
			topmax: '#bf3440',
			bioheaven: '#55b9d9',
			biodown: '#f1ca07',
			bioup: '#6a619e',
			calmag: '#7c7c7a'
		},
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				nutes: 'repeat(5, minmax(0, 1fr))'
			}
		}
	},
	variants: {
		extend: { inset: ['active'] }
	},
	plugins: []
};
