<script setup>
import { ref } from 'vue';
import Feladatsor from "../../Components/ViewComponents/Feladatsor.vue";
import View from "../../Components/ViewComponents/View.vue";

// A feladatsor láthatóságát irányítja
const isFeladatsorVisible = ref(true);
const toggleFeladatsor = () => {
  isFeladatsorVisible.value = !isFeladatsorVisible.value;
};

// Alapértelmezett háttérszín
const backgroundColor = ref('radial-gradient(circle at top left, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at center bottom, #cb0fd1 0%, rgba(161, 92, 193, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)');

// A színválasztó panel megjelenítése
const isColorPickerVisible = ref(false);
const toggleColorPicker = () => {
  isColorPickerVisible.value = !isColorPickerVisible.value;
};

// A háttér színének módosítása
const changeBackgroundColor = (color) => {
  backgroundColor.value = color;
};

// Vissza gomb funkció
const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="containerr">
    <!-- Vissza nyíl gomb -->
    <button @click="goBack" class="back-button cursor-pointer absolute text-3xl top-4 left-4">
      ←
    </button>

    <div class="box" :style="{ background: backgroundColor }">
      <!-- Színválasztó gomb -->
      <button @click="toggleColorPicker" class="toggle-button">
        Színválasztó
      </button>

      <!-- Dropdown színválasztó panel -->
      <div v-if="isColorPickerVisible" class="color-picker">
  <!-- Lila szín beállítása a kívánt háttér színsémával -->
  <div 
    @click="changeBackgroundColor('radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%)')" 
    class="color-option" 
    style="background: radial-gradient(at 0% 0%, #7f3f98 0%, transparent 50%), radial-gradient(at 50% 50%, #9b4c9c 0%, transparent 50%), radial-gradient(at 100% 100%, #8e3b8d 0%, transparent 50%); opacity: 80%;">
    Lila
  </div>

  <!-- Zöld szín -->
  <div 
    @click="changeBackgroundColor('radial-gradient(circle at top left, #32CD32 0%, rgba(50, 205, 50, 0) 100%), radial-gradient(circle at center bottom, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at top right, #27b2e0 0%, rgba(0, 191, 255, 0) 100%)')" 
    class="color-option" 
    style="background-color: #32CD32;">
    Zöld
  </div>

  <!-- Kék szín -->
  <div 
    @click="changeBackgroundColor('radial-gradient(circle at top left, #399cca 0%, rgba(50, 205, 255, 0) 100%), radial-gradient(circle at center bottom, #000000 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(circle at top right, #2295ca 0%, rgba(0, 191, 255, 0) 100%)')" 
    class="color-option" 
    style="background-color: #399cca;">
    Kék
  </div>
</div>


      <div class="grid grid-cols-[25dvw_75dvw] gap-0 h-screen">
        <div v-if="isFeladatsorVisible" class="transition-transform duration-500">
          <Feladatsor @toggle="toggleFeladatsor" />
        </div>

        <div class="flex-grow transition-all duration-500" :class="{ 'ml-10': !isFeladatsorVisible, 'mr-40': isFeladatsorVisible }">
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
  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) ;
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

.color-picker {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 200px;
  z-index: 100;
}

.color-option {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button {
  z-index: 10; 
}
</style>
