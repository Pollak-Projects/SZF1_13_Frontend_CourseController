<script setup>
import { ref } from 'vue';

const isOpenModule = ref(false);
const isOpenTasks = ref(true); // Set to true to have "Feladatok" open by default
const isOpen1 = ref(false);
const isOpen2 = ref(false);

const toggleModule = () => {
    if (isOpenTasks.value) {
        isOpenTasks.value = false; // Close "Feladatok" if it is open
    }
    isOpenModule.value = true; // Open "Modulok"
};

const toggleTasks = () => {
    if (isOpenModule.value) {
        isOpenModule.value = false; // Close "Modulok" if it is open
    }
    isOpenTasks.value = true; // Open "Feladatok"
};

const toggleDropdown1 = () => {
    isOpen1.value = !isOpen1.value;
};

const toggleDropdown2 = () => {
    isOpen2.value = !isOpen2.value;
};
</script>

<template>
  <div class="justify-center items-center">
    <div class=" h-[56dvw] mt-28 border-1 rounded-2xl border-black mx-auto bg-black bg-opacity-10" style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5), 0 -4px 0 rgba(0, 0, 0, 0); overflow-y: auto; padding: 16px;">
      <div class="flex justify-around text-gray-500 text-3xl p-4">
        <h1 @click="toggleModule" :class=" ['moduls', isOpenModule ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto">Modulok</h1>
        <h1 @click="toggleTasks" :class="['quest', isOpenTasks ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto">Feladatok</h1>
      </div>
      <hr>
      <div v-if="isOpenModule" class="dropdown-content">
        <p>Modul 1 tartalom</p>
        <p>Modul 2 tartalom</p>
      </div>

<div class="dropdown-content" :style="{ maxHeight: isOpenTasks ? 'none' : '0', overflow: 'hidden' }">


    <div v-if="isOpenTasks" class="flex items-center">
      <h2 :class="['text-3xl', isOpen1 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown1" style="flex-grow: 1; cursor: pointer;">Big Tananyag 1</h2>
      <span class="arrow" :class="{ 'open': isOpen1 }" id="nem-kijelolheto" @click.stop="toggleDropdown1">&#9660;</span>
    </div>
  <div v-if="isOpen1" class="dropdown-content">
    <p>Content for dropdown 1</p>
    <p>More content for dropdown 1</p>
    <p>Even more content for dropdown 1</p>
  </div>

  <div v-if="isOpenTasks" class="flex items-center">
      <h2 :class="['text-3xl', isOpen2 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown2" style="flex-grow: 1; cursor: pointer;">Big Tananyag 2</h2>
      <span class="arrow" :class="{ 'open': isOpen2 }" id="nem-kijelolheto" @click.stop="toggleDropdown2">&#9660;</span>
    </div>

    <div v-if="isOpen2" class="dropdown-content">
          <p>Content for dropdown 2</p>
          <p>More content for dropdown 2</p>
          <p>Even more content for dropdown 2</p>
        </div>

</div>
  </div>
    </div>
</template>

<style scoped>
.moduls, .quest {
  cursor: pointer;
  transition: color 0.3s;
}
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
  background-color: transparent;
}
.flex {
  display: flex;
  align-items: center;
}
.arrow {
  transition: transform 0.3s ease;
  font-size: 18px; 
  margin-left: 10dvw; 
  cursor: pointer; /* Nyílra mutat */
}

/* Az üres hely stílusa, ami letiltja a kattintást */
.flex {
  cursor: default; /* Az üres helyre kattintva ne változzon a kurzor */
}
.arrow.open {
  transform: rotate(90deg);
}
.arrow:hover {
  cursor: pointer;
}

h2 {
  cursor: pointer;

} 

h2:hover {
  color: #f472b6;
}

#nem-kijelolheto {
  user-select: none; /* Ezt állítsd be a szövegre, amit nem szeretnél kijelölni */
}

.mt-28 {
  margin-top: 7rem; /* Ezt állíthatod, ha szükséges */
}

.border-1 {
  max-height: 37.25dvw; /* Állítsd be az alap méretet */
  overflow: hidden; /* Megakadályozza a div méretének növekedését */
}

::-webkit-scrollbar {
  width: 12px; /* Szélesség */
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1); /* Háttér */
  border-radius: 10px; /* Lekerekítés */
}

::-webkit-scrollbar-thumb {
  background: #d346f0; /* Szín */
  border-radius: 15px; /* Lekerekítés */
}

::-webkit-scrollbar-thumb:hover {
  background: #da7be2; /* Sötétebb szín hover állapotban */
}

</style>
