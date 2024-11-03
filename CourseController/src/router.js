import {createRouter, createWebHistory} from 'vue-router'

// TODO someday replace this with an auto generated router
// pain in the butt to batch add new routes
const routes = [


    //{ path: '/', component: () => import("./views/Home.vue") },
    { path: '/', component: () => import("./views/LandingPage.vue") },
    { path: '/landing', component: () => import("./views/LandingPage.vue") },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("./views/NotFound.vue") },
    {
        path: '/admin',
        component: () => import("./views/Admin.vue"),
        redirect: '/admin/modules',
        children: [{
            path: 'modules',
            name: 'Modules',
            component: () => import("./views/admin/AdminModules.vue"),
        },{
            path: 'assignments',
            name: 'Assignments',
            component: () => import("./views/admin/AdminAssignments.vue"),
        },{
            path: 'users',
            name: 'Users',
            component: () => import("./views/admin/AdminUsers.vue"),
        }]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;