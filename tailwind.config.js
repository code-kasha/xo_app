/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				gf: "280px",
				mb: "320px",
				xxxs: "400px",
				xxs: "500px",
				xs: "540px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
}
