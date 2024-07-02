export default defineNuxtConfig({
    srcDir: "src",

    app: {
        baseURL: "/"
    },

    css: [
        "@/assets/css/main.css"
    ],

    compatibilityDate: "2024-07-02",

    modules: [
        "@nuxtjs/color-mode"
    ],

    typescript: {
        strict: true,
        typeCheck: true
    }
})