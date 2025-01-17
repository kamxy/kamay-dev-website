/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb', // Bright blue
                    light: '#60a5fa',
                    dark: '#1d4ed8',
                },
                secondary: {
                    DEFAULT: '#f8fafc', // Light gray/blue
                    dark: '#e2e8f0',
                },
                background: {
                    DEFAULT: '#ffffff', // White
                    alt: '#f1f5f9', // Very light gray
                },
                text: {
                    DEFAULT: '#1e293b', // Dark blue/gray
                    light: '#64748b', // Medium gray
                    dimmed: '#94a3b8', // Light gray
                },
                accent: {
                    blue: '#3b82f6',
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                    orange: '#f97316',
                    green: '#22c55e',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            textColor: {
                'text-default': '#1e293b',
                'text-light': '#64748b',
                'text-dimmed': '#94a3b8',
            },
        },
    },
    plugins: [],
}; 