/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#0ea5e9', // Sky Blue
                    light: '#38bdf8',
                    dark: '#0284c7',
                },
                slate: {
                    900: '#0f172a',
                },
                dept: '#E75D24',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
