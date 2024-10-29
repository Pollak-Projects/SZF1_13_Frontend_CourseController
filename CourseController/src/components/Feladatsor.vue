<script setup>
import { ref } from 'vue';

const isOpenModule = ref(false);
const isOpenTasks = ref(true);
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isContentVisible = ref(true);

const toggleContentVisibility = () => {
  isContentVisible.value = !isContentVisible.value;
};

const toggleModule = () => {
  if (isOpenTasks.value) {
    isOpenTasks.value = false;
  }
  isOpenModule.value = true;
};

const toggleTasks = () => {
  if (isOpenModule.value) {
    isOpenModule.value = false;
  }
  isOpenTasks.value = true;
};

const toggleDropdown1 = () => {
  isOpen1.value = !isOpen1.value;
};

const toggleDropdown2 = () => {
  isOpen2.value = !isOpen2.value;
};
</script>


<template>
  <div class="container">
    <div
      class="content-box"
      :class="{ 'slide-out': !isContentVisible, 'slide-in': isContentVisible }"
      v-show="true"
    >
      <button @click="toggleContentVisibility" class="toggle-button">X</button>
      <div class="h-[37.2dvw] mt-28 border-1 rounded-2xl border-black mx-auto bg-black bg-opacity-10 content-area" style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); overflow: auto; padding: 16px;" >
        <div class="flex justify-around text-gray-500 text-3xl p-4" >
          <h1 @click="toggleModule" :class="['moduls', isOpenModule ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto">Modulok</h1>
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
            <h2 :class="['text-3xl', isOpen1 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown1" style="flex-grow: 1; cursor: pointer;">Big Tananyag 1</h2>
            <span class="arrow" :class="{ 'open': isOpen1 }" id="nem-kijelolheto" @click.stop="toggleDropdown1">&#9660;</span>
          </div>
          <div v-if="isOpen1" class="dropdown-content">
            <p>Content for dropdown 1</p>
            <p>More content for dropdown 1</p>
            <p>Even more content for dropdown 1</p>
          </div>


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
            <h2 :class="['text-3xl', isOpen1 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown1" style="flex-grow: 1; cursor: pointer;">Big Tananyag 1</h2>
            <span class="arrow" :class="{ 'open': isOpen1 }" id="nem-kijelolheto" @click.stop="toggleDropdown1">&#9660;</span>
          </div>
          <div v-if="isOpen1" class="dropdown-content">
            <p>Content for dropdown 1</p>
            <p>More content for dropdown 1</p>
            <p>Even more content for dropdown 1</p>
          </div>

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
            <h2 :class="['text-3xl', isOpen1 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown1" style="flex-grow: 1; cursor: pointer;">Big Tananyag 1</h2>
            <span class="arrow" :class="{ 'open': isOpen1 }" id="nem-kijelolheto" @click.stop="toggleDropdown1">&#9660;</span>
          </div>
          <div v-if="isOpen1" class="dropdown-content">
            <p>Content for dropdown 1</p>
            <p>More content for dropdown 1</p>
            <p>Even more content for dropdown 1</p>
          </div>


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
            <h2 :class="['text-3xl', isOpen1 ? 'text-pink-400' : 'text-gray-500']" id="nem-kijelolheto" @click="toggleDropdown1" style="flex-grow: 1; cursor: pointer;">Big Tananyag 1</h2>
            <span class="arrow" :class="{ 'open': isOpen1 }" id="nem-kijelolheto" @click.stop="toggleDropdown1">&#9660;</span>
          </div>
          <div v-if="isOpen1" class="dropdown-content">
            <p>Content for dropdown 1</p>
            <p>More content for dropdown 1</p>
            <p>Even more content for dropdown 1</p>
          </div>

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
  </div>
</template>


<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
}

.content-box {
  position: relative;
  width: 100%; /* Beállítjuk a szélességet */
  transition: transform 0.5s ease; /* Animáció beállítása */
}

.slide-in {
  transform: translateX(0); /* Alaphelyzet, amikor látható */
}

.slide-out {
  transform: translateX(-90%); /* Balra csúszik, így a jobb oldalon egy kis sáv látható */
}

.toggle-button {
  position: absolute;
  top: 5.8dvw;
  right: 0.5dvw;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #d346f0;
  cursor: pointer;
}

.content-area {
  padding: 16px;
}

.moduls, .quest {
  cursor: pointer;
  transition: color 0.3s;
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 18px;
  margin-left: 10dvw;
  cursor: pointer;
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
  user-select: none;
}

::-webkit-scrollbar {
  width: 12px;
}

.view-container {
  transition: width 0.5s ease;
  width: 70vw;
}
.view-container.expanded {
  width: 95vw;
}


::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #d346f0;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover {
  background: #da7be2;
}

</style>
