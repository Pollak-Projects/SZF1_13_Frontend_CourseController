<script setup>
import { ref } from 'vue';

const isOpen1 = ref(false);
const isOpen2 = ref(false);

const toggleDropdown1 = () => {
    isOpen1.value = !isOpen1.value;
};
const toggleDropdown2 = () => {
    isOpen2.value = !isOpen2.value;
};
</script>

<template>
  <div>
    <div class="mt-28 border-1 rounded-2xl border-black mr-10 bg-black bg-opacity-10" style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5), 0 -4px 0 rgba(0, 0, 0, 0);">
      <div class="text-center text-gray-500 text-3xl p-4 flex">
        <h1 class="moduls">Modulok</h1>
        <h1 class="quest">Feladat</h1>
      </div>

      <hr>
      <div class="flex items-center" @click="toggleDropdown1">
        <h2 class="text-3xl text-pink-400">Big Tananyag 1</h2>
        <span class="arrow" :class="{ 'open': isOpen1 }">&#9660;</span> <!-- Down arrow -->
      </div>
      <div v-if="isOpen1" class="dropdown-content">
        <p>Content for dropdown 1</p>
        <p>More content for dropdown 1</p>
        <p>Even more content for dropdown 1</p>
      </div>

      <div class="flex items-center mt-4" @click="toggleDropdown2">
        <h2 class="text-3xl text-pink-400">Big Tananyag 2</h2>
        <span class="arrow" :class="{ 'open': isOpen2 }">&#9660;</span> <!-- Down arrow -->
      </div>
      <div v-if="isOpen2" class="dropdown-content">
        <p>Content for dropdown 2</p>
        <p>More content for dropdown 2</p>
        <p>Even more content for dropdown 2</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.moduls {
  padding-left: 1.5vw;
  font-size: larger;
}
.quest {
  padding-left: 3.2vw;
  font-size: larger;
}
p {
  padding-left: 1dvw;
}
.dropdown-content {
  padding: 10px;
  background-color: transparent; /* Make the background transparent */
}
.flex {
  display: flex; /* Ensure flex display for the container */
  align-items: center; /* Center items vertically */
}
.arrow {
  transition: transform 0.3s ease;
  font-size: 18px; 
  margin-left: 13px; 
}
.arrow.open {
  transform: rotate(180deg); /* Rotate arrow 90 degrees when open */
}
</style>
