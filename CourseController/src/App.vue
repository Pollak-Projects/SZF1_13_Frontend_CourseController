<script setup>
import { ref } from 'vue';
import UserIcon from "./components/UserIcon.vue";
import Feladatsor from "./components/Feladatsor.vue";
import View from "./components/View.vue";

const backgroundColor = ref('radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)');

const toggleBackgroundColor = () => {
  backgroundColor.value = backgroundColor.value.includes('#cb0fd1') 
    ? 'radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #32CD32 0%, rgba(50, 205, 50, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)'
    : 'radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)';
};

</script>

<template>
  <div class="niger" :style="{ background: backgroundColor }">
    <div class="grid grid-cols-[25dvw_75dvw] grid-rows-none gap-0 h-[100dvh] max-h-[100dvh] w-[130dvh]">

      <div class="">
        <div id="rightCol">
          <Feladatsor />
        </div>
      </div>
      <View />
      <RouterView />
    </div>
    <button @click="toggleBackgroundColor" class="toggle-button">
      Változtasd a háttér színét
    </button>
  </div>
</template>

<style scoped>
.niger {
    --_mesh-gradient-blur: 90px;
    --_mesh-gradient-blend-mode: normal;
    mix-blend-mode: var(--_mesh-gradient-blend-mode);
    background-size: cover; /* A háttérképek kitöltése */
}

.toggle-button {
    position: absolute;
    top: 4px;
    right: 4px;
    background: gray;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background 0.3s;
}

.toggle-button:hover {
    background: #5697cc; /* A hover háttérszín */
    color: white; /* A gomb szövegének színe a hover állapotban */
}
</style>
