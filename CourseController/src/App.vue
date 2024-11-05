
<template>
  <div class="box" :style="{ background: backgroundColor }">
    <button @click="toggleBackgroundColor" class="toggle-button">
      Változtasd a háttér színét
    </button>
    <div class="grid grid-cols-[25dvw_75dvw] gap-0 h-screen">
      <div v-if="isFeladatsorVisible" class="transition-transform duration-500">
        <Feladatsor @toggle="toggleFeladatsor" />
      </div>
      <div class="flex-grow transition-all duration-500" :class="{ 'ml-10': !isFeladatsorVisible, 'mr-20': isFeladatsorVisible }">
        <View :class="{ 'flex-grow': isFeladatsorVisible, 'w-full': !isFeladatsorVisible }" />
      </div>
      
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Feladatsor from "./components/Feladatsor.vue";
import View from "./components/View.vue";

const isFeladatsorVisible = ref(true);

const toggleFeladatsor = () => {
  isFeladatsorVisible.value = !isFeladatsorVisible.value;
};
const backgroundColor = ref('radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)');

const toggleBackgroundColor = () => {
  backgroundColor.value = backgroundColor.value.includes('#cb0fd1') 
    ? 'radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #32CD32 0%, rgba(50, 205, 50, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)'
    : 'radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)';
};
</script>

<style scoped>
.box {
  --_mesh-gradient-blur: 90px;
  --_mesh-gradient-blend-mode: normal;

  background: 
      radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%),
      radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%);
  
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
  background-size: cover; 
  height: 100vh; /* Magasság beállítása */
  overflow: hidden; /* Görgetés letiltása */
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%; /* Magasság beállítása */
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

.flex-grow {
  transition: flex-grow 0.5s; /* Animáció a flex-grow-ra */
}

.ml-2 {
  margin-left: 0.5rem; /* Csökkentett margin érték */
}

.toggle-button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
