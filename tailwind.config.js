/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                Dark_Blue: 'hsl(209, 23% , 22% )',
                Very_Dark_Blue: 'hsl(207, 26% , 17% )',
                Very_Dark_Blue_Light_text: 'hsl(200, 15% , 8% )',
                Dark_Gray: 'hsl(0, 0% , 52% )',
                Very_Light_Gray: 'hsl(0, 0% , 98% )',
                White: 'hsl(0, 0% , 100% )',
            },
            screens: {
                'mobile': "389px",
                'desktop': "790px"
            },
        },
    },
    plugins: [],
}