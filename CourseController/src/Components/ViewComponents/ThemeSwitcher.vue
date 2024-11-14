<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeStore } from '../../stores/themeStore.js';
import { watch } from "vue";

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

// Dropdown kezelése
const isDropdownOpen = ref(false);
const activeColor = ref(currentTheme.value); // Aktív szín követése

// Téma frissítés
const updateTheme = (theme) => {
  themeStore.setTheme(theme);
  activeColor.value = theme; // Az aktuális szín frissítése
};

// Figyelő, hogy a témát frissítsük a store-ban, ha változik
watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Dropdown bezárása kattintáskor bárhol
const closeDropdown = (event) => {
  if (!event.target.closest('.theme-selector')) {
    isDropdownOpen.value = false;
  }
};

// OnMounted és BeforeUnmount életciklusok
onMounted(() => {
  themeStore.loadTheme();  // Betöltjük a témát a store-ban
  window.addEventListener('click', closeDropdown); // Bezárás kattintásra
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropdown); // Takarítás
});
</script>

<template>
  <!-- Bal felső sarokban lebegő színválasztó -->
  <div class="theme-selector" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <div :style="{ backgroundColor: activeColor }" class="circle"></div>
    <div v-if="isDropdownOpen" class="colors">
      <button @click="updateTheme('purple')" class="color-option purple"></button>
      <button @click="updateTheme('green')" class="color-option green"></button>
      <button @click="updateTheme('white')" class="color-option white"></button>
    </div>
  </div>
</template>

<style scoped>
/* A színválasztó kör */
.theme-selector {
  position: fixed;
  top: 20px; /* Fentről 20px távolságra */
  left: 50%; /* Középre igazítva */
  transform: translateX(-50%); /* Tökéletes középre igazítás */
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* A nagy kör, ami az aktív színt mutatja */
.circle {
  width: 70px;
  height: 70px;
  background-color: var(--primary-color); /* Alapértelmezett szín */
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* A színválasztó menü */
.colors {
  display: flex;
  flex-direction: row; /* Vízszintes elrendezés */
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

/* Mivel az egér fölé megy, akkor láthatóvá válik a színválasztó */
.theme-selector:hover .colors {
  opacity: 1;
  pointer-events: auto;
}

/* A szín gombok */
.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  margin: 0 10px; /* Távolság a gombok között */
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Színek */
.purple {
  background-color: purple;
}

.green {
  background-color: green;
}

.default {
  background-color: lightgray;
}

/* Hover hatás a színekre */
.color-option:hover {
  transform: scale(1.2);
}
</style>
