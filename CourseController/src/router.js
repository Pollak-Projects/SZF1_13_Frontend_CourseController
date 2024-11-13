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
    {
        path: '/admin',
        component: () => import("./Views/AdminPage/Admin.vue"),
        children: [{
            path: 'modules-create',
            name: 'ModulesCreate',
            component: () => import("./Views/AdminPage/Modules/AdminModulesCreate.vue"),
        },{
            path: 'modules-list',
            name: 'ModulesList',
            component: () => import("./Views/AdminPage/Modules/AdminModulesList.vue"),
        },{
            path: 'assignments-create',
            name: 'AssignmentsCreate',
            component: () => import("./Views/AdminPage/Assignments/AdminAssignmentsCreate.vue"),
        },{
            path: 'assignments-list',
            name: 'AssignmentsList',
            component: () => import("./Views/AdminPage/Assignments/AdminAssignmentsList.vue"),
        },{
            path: 'users-create',
            name: 'UsersCreate',
            component: () => import("./Views/AdminPage/Users/AdminUsersCreate.vue"),
        },{
            path: 'users-list',
            name: 'UsersList',
            component: () => import("./Views/AdminPage/Users/AdminUsersList.vue"),
        }]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("./Views/NotFound.vue") },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;