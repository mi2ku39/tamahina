require('dotenv').config();
const {NODE_ENV} = process.env;

export default {
    env: {
        NODE_ENV
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    pageTransition: {
        name: 'tamahina',
        mode: 'out-in'
    },
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    head: {
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        ]
    },
    modules: [
        'nuxt-fontawesome'
    ],
    fontawesome: {
        component: 'fa'
    }
}