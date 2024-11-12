<script setup>
import { ref } from 'vue';
import Feladatsor from "../../Components/ViewComponents/Feladatsor.vue";
import View from "../../Components/ViewComponents/View.vue";
import ThemeSwitcher from '../../Components/ViewComponents/ThemeSwitcher.vue';


const isFeladatsorVisible = ref(true);
const toggleFeladatsor = () => {
  isFeladatsorVisible.value = !isFeladatsorVisible.value;
};





const goBack = () => {
  window.history.back();
};


</script>

<template>
  
  <div class="containerr">

    <button @click="goBack" class="back-button cursor-pointer absolute text-3xl top-4 left-4">
      ←
    </button>

    <div class="box" :style="{ background: backgroundColor }">

      <ThemeSwitcher />

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

</template>

<style scoped>
.Themebut{
  display: flex;
  margin-left:80%
}
.containerr {
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;
  background: radial-gradient( at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000c0 0px, transparent 50%), radial-gradient(at 9.054951513370554% 60.9845146871009%, #ff00ff0e 0px, transparent 80%), radial-gradient(at 9.054951513370554% 80.9845146871009%, #ff00ff0e 0px, transparent 80%), radial-gradient(at 9.054951513370554% 100.9845146871009%, #ff00ff2d 0px, transparent 80%), radial-gradient(at 20.054951513370554% 100.9845146871009%, #ff00ff6b 0px, transparent 35%), radial-gradient(at 49.054951513370554% 120.9845146871009%, #c40be9d3 0px, transparent 50%), radial-gradient(at 47.71672054069938% 38.11222860791827%, #399cca 0px, transparent 50%), radial-gradient(at 63.052600646488386% 92.55667305236271%, #399cca 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #399cca 0px, transparent 50%), radial-gradient(at 153.052600646488386% 42.55667305236271%, #2295ca 0px, transparent 50%), radial-gradient(at 113.052600646488386% 82.55667305236271%, #2295ca 0px, transparent 50%), radial-gradient(at 113.052600646488386% 2.55667305236271%, #2295ca 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #5697cc;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
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
