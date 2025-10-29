/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'arabic': ['"Noto Naskh Arabic"', 'serif'],
            },
            animation: {
                'bounce-slow': 'bounce 2s infinite',
                'shake': 'shake 0.5s ease-in-out infinite',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                    '100%': { transform: 'rotate(-3deg)' },
                }
            }
        },
    },
    plugins: [],
}
