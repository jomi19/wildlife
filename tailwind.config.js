const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

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
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			red: {
				100: "#F11818",
				200: "#C30404",
				300: "#5C110D",
			},
			green: {
				100: "#bac204",
				200: "#A3B005",
				300: "#7F9307",
				400: "#53700A",
				500: "#2D520C",
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
