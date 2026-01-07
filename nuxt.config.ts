import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-lucide-icons"],
});
