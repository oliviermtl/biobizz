const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./src/**/*.svelte', './src/**/*.html'],
		options: {
			safelist: [
				'bg-rootjuice',
				'bg-biogrow',
				'bg-biobloom',
				'bg-topmax',
				'bg-bioheaven',
				'bg-biodown',
				'bg-bioup',
				'bg-calmag',
				'grid-cols-1',
				'grid-cols-2',
				'grid-cols-3',
				'grid-cols-4',
				'grid-cols-5'
			]
		}
	},
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
			biodown: '#faba18',
			bioup: '#5f4f96',
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
