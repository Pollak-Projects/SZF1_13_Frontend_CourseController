import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import("./components/HelloWorld.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;