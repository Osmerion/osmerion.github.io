export default defineNuxtConfig({
    srcDir: "src",

    app: {
        baseURL: "/"
    },

    css: [
        "@/assets/css/main.css"
    ],

    typescript: {
        strict: true,
        typeCheck: true
    }
})