module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ruda: ['Ruda', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: "var(--primary-blue)",
          cyan: "var(--primary-cyan)",
        },
        gradient: {
          start: "var(--primary-gradient-start)",
          end: "var(--primary-gradient-end)",
        },
        background: {
          dark: "var(--bg-dark)",
          black: "var(--bg-black)",
          card: "var(--bg-card)",
        },
        text: {
          white: "var(--text-white)",
          gray: "var(--text-gray)",
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, var(--primary-blue), var(--primary-cyan))',
        'cta-gradient': 'linear-gradient(to right, var(--primary-gradient-start), var(--primary-gradient-end))',
        'page-gradient': 'linear-gradient(to bottom, var(--bg-dark), var(--bg-black))',
      },
    },
  },
  plugins: [],
};