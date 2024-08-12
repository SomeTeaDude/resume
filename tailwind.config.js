const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.jsx"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0 1px 4px 0 rgba(15,15,20,.1)",
				"4xl": "0 3px 8px 0 rgba(15,15,20,.2)",
			},
			colors: {
				golden: "#ffc107",
				lovely: "#f46258",
			},
		},
	},
	plugins: [
		createThemes({
			light: {
				secondary: "#5c5c6f",

				main: "#e0e0e6",
				"main-1": "#ffffff",
				"main-2": "#e0e0e6",
				"main-3": "#f4f4f6",
			},
			dark: {
				secondary: "#8c8c8e",

				main: "#191923",
				"main-1": "#20202a",
				"main-2": "#24242e",
				"main-3": "#1e1e28",
			},
			gold: {
				primary: "#ffc107",
			},
			love: {
				primary: "#f46258",
			},
		}),
	],
};
