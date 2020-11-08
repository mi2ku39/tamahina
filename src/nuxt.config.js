require('dotenv').config();
const {NODE_ENV} = process.env;

export default {
    mode: 'universal',
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
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#'
        },
        titleTemplate: (title) => {
            return title ? `${title} | ヒナクラ` : 'ヒナクラ';
        },
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            {
                hid: 'title',
                name: 'title',
                content: 'ヒナクラ | ⚡大17代の卒業祝いアニクラ'
            },
            {
                hid: 'description',
                name: 'description',
                content: '⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！また、ヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！'
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'ヒナクラ',
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: '@hinakura_202103'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `${process.env.BASE_URL}`,
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'ヒナクラ | ⚡大17代の卒業祝いアニクラ',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: `${process.env.BASE_URL}/img/logos/hnkr.png`,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: '⚡大17代の卒業祝いアニクラとして2021/03/06に「ヒナクラ」を開催！また、ヒナクラ参加DJの練習としてDJの"タマゴ"向けオンラインアニクラ「タマクラ」も定期的に開催！',
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