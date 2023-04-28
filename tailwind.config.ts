export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ['fira-sans', 'sans-serif'],
        'acumin-pro': ['acumin-pro', 'sans-serif'],
      },
    },
  },
};
