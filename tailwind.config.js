/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				wave: {
					"0%": { transform: "translateX(0%)" },
					"50%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				wave: "wave 12s ease-in-out infinite ",
			},
		},
	},
	plugins: [require("tailwindcss-no-scrollbar")],
};
