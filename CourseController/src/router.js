import { createMemoryHistory, createRouter } from 'vue-router'

// TODO someday replace this with an auto generated router
// pain in the butt to batch add new routes
const routes = [
    { path: '/', component: () => import("./views/Home.vue")},
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
    history: createMemoryHistory(),
    routes,
})

export default router;