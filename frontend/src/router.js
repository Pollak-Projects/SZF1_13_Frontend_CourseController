import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import("./components/HelloWorld.vue") },
    { path: '/admin', component: () => import("./views/Admin.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;