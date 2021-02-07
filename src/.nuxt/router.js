import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6541e70e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f3283cc0 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _fbe6fbb2 = () => interopDefault(import('../pages/others.vue' /* webpackChunkName: "pages/others" */))
const _fe5d15f8 = () => interopDefault(import('../pages/events/bimitmsushi.vue' /* webpackChunkName: "pages/events/bimitmsushi" */))
const _66ece70f = () => interopDefault(import('../pages/events/hnkr.vue' /* webpackChunkName: "pages/events/hnkr" */))
const _69aa326b = () => interopDefault(import('../pages/events/kmkr.vue' /* webpackChunkName: "pages/events/kmkr" */))
const _3deb89c2 = () => interopDefault(import('../pages/events/tmkr00.vue' /* webpackChunkName: "pages/events/tmkr00" */))
const _3df9a143 = () => interopDefault(import('../pages/events/tmkr01.vue' /* webpackChunkName: "pages/events/tmkr01" */))
const _3e07b8c4 = () => interopDefault(import('../pages/events/tmkr02.vue' /* webpackChunkName: "pages/events/tmkr02" */))
const _54d86128 = () => interopDefault(import('../pages/events/tmkr02-5.vue' /* webpackChunkName: "pages/events/tmkr02-5" */))
const _3e15d045 = () => interopDefault(import('../pages/events/tmkr03.vue' /* webpackChunkName: "pages/events/tmkr03" */))
const _0a7a0aad = () => interopDefault(import('../pages/events/tmkr03-5.vue' /* webpackChunkName: "pages/events/tmkr03-5" */))
const _3e23e7c6 = () => interopDefault(import('../pages/events/tmkr04.vue' /* webpackChunkName: "pages/events/tmkr04" */))
const _3f6045ee = () => interopDefault(import('../pages/events/tmkr04-5.vue' /* webpackChunkName: "pages/events/tmkr04-5" */))
const _04f87194 = () => interopDefault(import('../pages/events/tmkrf.vue' /* webpackChunkName: "pages/events/tmkrf" */))
const _25d23184 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6541e70e,
    name: "about"
  }, {
    path: "/events",
    component: _f3283cc0,
    name: "events"
  }, {
    path: "/others",
    component: _fbe6fbb2,
    name: "others"
  }, {
    path: "/events/bimitmsushi",
    component: _fe5d15f8,
    name: "events-bimitmsushi"
  }, {
    path: "/events/hnkr",
    component: _66ece70f,
    name: "events-hnkr"
  }, {
    path: "/events/kmkr",
    component: _69aa326b,
    name: "events-kmkr"
  }, {
    path: "/events/tmkr00",
    component: _3deb89c2,
    name: "events-tmkr00"
  }, {
    path: "/events/tmkr01",
    component: _3df9a143,
    name: "events-tmkr01"
  }, {
    path: "/events/tmkr02",
    component: _3e07b8c4,
    name: "events-tmkr02"
  }, {
    path: "/events/tmkr02-5",
    component: _54d86128,
    name: "events-tmkr02-5"
  }, {
    path: "/events/tmkr03",
    component: _3e15d045,
    name: "events-tmkr03"
  }, {
    path: "/events/tmkr03-5",
    component: _0a7a0aad,
    name: "events-tmkr03-5"
  }, {
    path: "/events/tmkr04",
    component: _3e23e7c6,
    name: "events-tmkr04"
  }, {
    path: "/events/tmkr04-5",
    component: _3f6045ee,
    name: "events-tmkr04-5"
  }, {
    path: "/events/tmkrf",
    component: _04f87194,
    name: "events-tmkrf"
  }, {
    path: "/",
    component: _25d23184,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
