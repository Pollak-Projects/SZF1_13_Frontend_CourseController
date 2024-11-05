<script setup>
import { ref } from 'vue';
import Feladatsor from "../../Components/ViewComponents/Feladatsor.vue";
import View from "../../Components/ViewComponents/View.vue";
</script>

<template>
<div class="containerr">
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
.containerr{
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #957641;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
  
}
</style>
