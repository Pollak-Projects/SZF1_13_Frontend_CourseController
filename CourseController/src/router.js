import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import("../../../feke_project - Copy/frontend/src/components/HelloWorld.vue") },
    { path: '/admin', component: () => import("../../../feke_project - Copy/frontend/src/views/Admin.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;