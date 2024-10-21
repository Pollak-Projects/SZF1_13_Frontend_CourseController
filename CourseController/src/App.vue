<script setup>
import UserIcon from "./components/UserIcon.vue";
import Feladatsor from "./components/Feladatsor.vue";
import View from "./components/View.vue";


</script>

<template>
<!--  TODO remove circus ahh looking background colors (these are for debug visualisations) -->
<div class="niger">
  <div class="grid grid-cols-[25dvw_75dvw] grid-rows-none gap-0 h-[100dvh] max-h-[100dvh] w-[130dvh] bg-gradient-to-b">

    <div class="">
      <div id="rightCol">

        <Feladatsor/>

      </div>
    </div>
      <View/>
      <RouterView />

    </div>
  </div>
</template>

<style scoped>
.niger {
    --_mesh-gradient-blur: 90px;
    --_mesh-gradient-blend-mode: normal;

    background: 
        radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%),
        radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%),
        radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%);
        
    mix-blend-mode: var(--_mesh-gradient-blend-mode);
    background-size: cover; /* A háttérképek kitöltése */
}
</style>
