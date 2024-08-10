const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.jsx"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0px -2px 18px 0px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [
		createThemes({
			gold: {
				primary: "#ffc107",
			},
			love: {
				primary: "#f46258",
			},
		}),
	],
};
