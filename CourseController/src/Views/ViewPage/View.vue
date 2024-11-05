<script setup>
import { ref } from 'vue';
import Feladatsor from "../../Components/ViewComponents/Feladatsor.vue";
import View from "../../Components/ViewComponents/View.vue";

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

<template>
<div class="containerr">
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
  </div>
</template>


<style scoped>
.containerr{
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #957641;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);

  background-size: cover; 
  height: 100vh; 
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
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
    background: #5697cc; 
    color: white; 
}

.flex-grow {
  transition: flex-grow 0.5s; 
}

.ml-2 {
  margin-left: 0.5rem;
}

.toggle-button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>