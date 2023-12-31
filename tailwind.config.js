/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/typography/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {

            fontFamily: {
                montserratReg: "MontserratReg",
                montserratBold: "MontserratBold",
                montserratExtraBold: "MontserratExtraBold",
                robotoMedium: "RobotoMedium",
                robotoRegular: "RobotoRegular",
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}