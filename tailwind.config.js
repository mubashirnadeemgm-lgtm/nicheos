/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: "hsl(0 0% 89%)",
                input: "hsl(0 0% 89%)",
                ring: "hsl(0 0% 3.9%)",
                background: "hsl(0 0% 100%)",
                foreground: "hsl(0 0% 3.9%)",
                primary: {
                    DEFAULT: "hsl(0 0% 9%)",
                    foreground: "hsl(0 0% 98%)",
                },
                secondary: {
                    DEFAULT: "hsl(0 0% 96.1%)",
                    foreground: "hsl(0 0% 9%)",
                },
                muted: {
                    DEFAULT: "hsl(0 0% 96.1%)",
                    foreground: "hsl(0 0% 45.1%)",
                },
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                float: 'float 20s ease-in-out infinite',
                'float-delayed': 'float 25s ease-in-out infinite',
                'float-slow': 'float 30s ease-in-out infinite',
                slideUp: 'slideUp 0.5s ease-out',
                fadeIn: 'fadeIn 0.3s ease-in',
            },
        },
    },
    plugins: [],
}
