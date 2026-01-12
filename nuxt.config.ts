// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/",
        pageTransition: { name: "page", mode: "out-in" },

        head: {
            htmlAttrs: { lang: "en" },
            link: [
                // { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                // { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon.png" },
                // { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
                // { rel: "preload", href: "/assets/fonts/Inter.var.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
                // { rel: "preload", href: "/assets/fonts/JetBrainsMono-Regular.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
            ]
        }
    },

    colorMode: {
        preference: "system",
        fallback: "dark"
    },

    compatibilityDate: "2024-07-18",

    css: [
        "@/assets/css/main.css"
    ],

    modules: [
        "@nuxtjs/color-mode"
    ],
})
