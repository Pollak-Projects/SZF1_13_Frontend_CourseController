import {createApp} from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from "./router.js";
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import {CourseControlPreset} from "./app-theme.js";
import {ToastService} from "primevue";


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
    .use(ToastService)
    .use(router)
    .use(createPinia())
    .mount('#app')

