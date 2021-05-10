import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import home from './components/home.vue'
import about from './components/about.vue'
import promo from './components/promo.vue'
import profile from './components/profile.vue'
import kategori from './components/kategori.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', name: "home", component:home},
        {path: '/about', name: "about", component:about},
        {path: '/promo', name: "promo", component:promo},
        {path: '/profile', name: "profile", component:profile},
        {path: '/kategori', name: "kategori", component:kategori},
    ],
    base: '/'
})

createApp(App).use(router).mount('#app')
