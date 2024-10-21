import { createMemoryHistory, createRouter } from 'vue-router'

// TODO someday replace this with an auto generated router
// pain in the butt to batch add new routes
const routes = [
    { path: '/', component: () => import("./views/Home.vue") },
    { path: '/admin', component: () => import("./views/Admin.vue") },
    { path: '/landing', component: () => import("./views/LandingPage.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;