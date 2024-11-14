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




</div>


      <div class="grid grid-cols-[25dvw_75dvw] gap-0 h-screen">
        <div v-if="isFeladatsorVisible" class="transition-transform duration-500">
          <Feladatsor @toggle="toggleFeladatsor" />
        </div>
        <ThemeSwitcher />
        <div class="flex-grow transition-all duration-500" :class="{ 'ml-10': !isFeladatsorVisible, 'mr-40': isFeladatsorVisible }">
          <View :class="{ 'flex-grow': isFeladatsorVisible, 'w-full': !isFeladatsorVisible }" />
        </div>
      </div>

</template>

<style scoped>
.Themebut{
  display: flex;
  margin-left:80%
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
