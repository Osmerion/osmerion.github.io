export default defineNuxtConfig({
    srcDir: "src",

    app: {
        baseURL: "/"
    },

    css: [
        "@/assets/css/main.css"
    ],

    modules: [
        "@nuxtjs/color-mode"
    ],

    typescript: {
        strict: true,
        typeCheck: true
    }
})