## Vue Sidebar Documentation

### Example of defining a router
The sidebar will be the router of the application and thus it requires a routing to be defined. In Vue 3 this is an example how you can define a basic routing.

##### index.js
```javascript
import About from "../components/Pages/About.vue";
import Home from "../components/Pages/Home.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home, name : 'Home' },
    { path: '/about', component: About },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```

After defining the router, you can call it in any link by adding the following property to them: 
```html
<a href="/">Home<a>
```

### Implementation

Ba knowing this, we can just simply create any kind of sidebar and just add a link to the button defined in it.

Our project will have a dropdown sidebar for the nested routing, when the higher layer is clicked on, the lower layers will be listed under it and thus the users will be able to navigate between the pages.


### Design
#### Figma:

Jani Patrik terv: https://www.figma.com/design/JkvpapuM2XgTM6wulINPWS/Pollak-Project?node-id=0-1&t=8H0PuoVi9xUXhfUZ-1

Gere Csanád terv: https://www.figma.com/design/7tZ9heZPsNwgWYalnKcNpI/okt-figma-design?node-id=0-1&node-type=canvas&t=tQRAlLfJSu8VL8Bu-0

Bene Dominik terv: https://www.figma.com/design/OMTYyzeOvpP29VktpkhsyK/Pollak-Project?node-id=0-1&node-type=canvas&t=Ze24CO2WwCtIw4jY-0