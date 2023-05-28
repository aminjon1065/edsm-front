/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Inter', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

