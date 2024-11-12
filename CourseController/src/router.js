import {createRouter, createWebHistory} from 'vue-router'

// TODO someday replace this with an auto generated router
// pain in the butt to batch add new routes
const routes = [


    //{ path: '/', component: () => import("./Views/Home.vue") },
    { path: '/', component: () => import("./Views/LandingPage/LandingPage.vue") },
    { path: '/listing', component: () => import("./Views/ListingPage/Listing.vue") },
    { path: '/login', component: () => import("./Views/LoginPage/Login.vue") },
    { path: '/edit', component: () => import("./Views/AdminPage/AddUpdate.vue") },
    { path: '/view', component: () => import("./Views/ViewPage/View.vue") },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("./Views/NotFound.vue") },
    {
        path: '/admin',
        component: () => import("./Views/AdminPage/Admin.vue"),
        redirect: '/admin/modules',
        children: [{
            path: 'modules',
            name: 'Modules',
            component: () => import("./Views/AdminPage/AdminModules.vue"),
        },{
            path: 'assignments',
            name: 'Assignments',
            component: () => import("./Views/AdminPage/AdminAssignments.vue"),
        },{
            path: 'users',
            name: 'Users',
            component: () => import("./Views/AdminPage/AdminUsers.vue"),
        },
    {
        path: "editor",
        component: () => import("./Views/AdminPage/Editor.vue")
    }]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;