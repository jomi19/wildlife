const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				"60vh": "60vh",
			},
			minHeight: {
				"80vh": "80vh",
				"20vh": "20vh",
			},
			fontFamily: {
				serif: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme("fontSize.4xl") },
				h2: { fontSize: theme("fontSize.xl") },
				p: { fontSize: theme("fontSize.lg") },
			});
		}),
	],
};
