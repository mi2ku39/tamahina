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
        titleTemplate: (title) => {
            return title ? `${title} | ヒナクラ` : 'ヒナクラ';
        },
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            {
                property: 'og:url',
                content: 'hnkr.ghostserver.jp',
            },
            {
                property: 'og:site_name',
                content: 'ヒナクラ',
            },
            {
                name: 'twitter:card',
                content: 'Summary Card'
            },
            {
                name: 'twitter:site',
                content: 'hinakura_202103'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,700;1,700&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
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