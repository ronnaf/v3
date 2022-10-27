const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#F7EFE5",
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#FFFFFF",
					500: "#F7EFE5",
					600: "#EAD5BA",
					700: "#DDBA8F",
					800: "#CFA064",
					900: "#C0853B",
				},
			},
			fontFamily: {
				sans: ["Roobert", ...defaultTheme.fontFamily.sans],
				display: ["Tobias"],
			},
		},
	},
	plugins: [],
};
