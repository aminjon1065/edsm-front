/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        // require('daisyui'),
        require('tailwindcss-no-scrollbar')
    ],
}