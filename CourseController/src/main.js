import {createApp} from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from "./router.js";
import PrimeVue from 'primevue/config';
import {CourseControlPreset} from "./app-theme.js";


createApp(App)
    .use(PrimeVue, {
        // unstyled: true,
        theme: {
            preset: CourseControlPreset,
            options: {
                darkModeSelector: false,
                cssLayer: {
                    name: 'primevue',
                    order: 'tailwind-base, primevue, tailwind-utilities',
                },
            },
        },
    })
    .use(router)
    .mount('#app')
