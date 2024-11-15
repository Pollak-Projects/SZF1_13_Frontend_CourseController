import {definePreset} from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export const CourseControlPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: 'rgba(10, 0, 0, 0.5)',
            100: 'rgba(10, 0, 0, 0.5)',
            200: 'rgba(10, 0, 0, 0.5)',
            300: 'rgba(10, 0, 0, 0.5)',
            400: 'rgba(10, 0, 0, 0.5)',
            500: 'rgba(10, 0, 0, 0.5)',
            600: 'rgba(10, 0, 0, 0.5)',
            700: 'rgba(10, 0, 0, 0.5)',
            800: 'rgba(10, 0, 0, 0.5)',
            900: 'rgba(10, 0, 0, 0.5)',
            950: 'rgba(10, 0, 0, 0.5)',
    },
        colorScheme: {
            light: {
                primary: {
                    contrastColor: "#ffffff",
                }
            },
        },
    },
})