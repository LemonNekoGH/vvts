import type { UserModule } from './types'

import { setupLayouts } from 'layouts-generated'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import '@unocss/reset/tailwind.css'

import './styles/main.css'
import 'uno.css'

const routesWithLayouts = setupLayouts(routes)

const router = createRouter({
  history: createWebHistory(),
  routes: routesWithLayouts,
})

const app = createApp(App)
app.use(router)

Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.(app, router))

app.mount('#app')
