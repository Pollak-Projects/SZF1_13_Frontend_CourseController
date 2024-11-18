<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false); // Menü állapota (nyitva/zárva)

// Menü állapot váltása
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Menü bezárása, ha kívülre kattintanak
const closeMenuOnClickOutside = (event: MouseEvent) => {
  const menu = document.getElementById('leftSide');
  const button = document.querySelector('button');
  if (menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

// Események felvétele és eltávolítása a komponens életciklusa során
onMounted(() => {
  document.addEventListener('click', closeMenuOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnClickOutside);
});
</script>

<template>
  <div class="containerr h-[100dvh] w-[100dvw]">
    <!-- Hamburger Menu Button -->
    <button
      class="fixed-top-right block md:hidden p-2 rounded bg-gray-800 text-white"
      @click="toggleMenu"
    >
      <span class="sr-only">Toggle navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Navigation Menu -->
    <div
      id="leftSide"
      :class="[ 
        'fixed-top-right text-xl bg-gray-800 p-4 rounded-lg transition-all duration-300',
        isMenuOpen ? 'block' : 'hidden',
        'md:block md:bg-transparent md:p-0 md:rounded-none',
      ]"
    >
      <ul class="flex flex-col md:flex-row md:space-x-4">
        <li>
          <router-link to="listing" class="text-white hover:underline">Megtekintés</router-link>
        </li>
        <li>
          <router-link to="login" class="text-white hover:underline">Bejelentkezés</router-link>
        </li>
        <li>
          <router-link to="admin/modules-create" class="text-white hover:underline">Admin</router-link>
        </li>
      </ul>
    </div>

    <div class="fixed-bottom-left font-semibold">
      <h1>Pollák</h1>
      <h1>Classroom</h1>
    </div>
  </div>
</template>

<style scoped>
.fixed-bottom-left {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 3%;
}

h1 {
  font-size: 17vh;
  font-family: Verdana;
  margin: 0;
  line-height: 1;
  transition: 0.3s;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 12vh;
  }
}

@media (max-width: 710px) {
  h1 {
    font-size: 8vh;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 5vh;
  }
}

.fixed-top-right {
  position: fixed;
  top: 0;
  right: 0;
  margin: 2%;
  margin-right: 3%;
}

ul {
  list-style: none;
  padding: 0;
}

.router-link {
  text-decoration: underline;
}

.containerr {
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%),
    radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%),
    radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%),
    radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%),
    radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%),
    radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #957641;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
}
</style>
