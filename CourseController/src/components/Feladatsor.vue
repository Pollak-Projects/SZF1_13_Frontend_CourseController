<template>
  <div class="container">
    <div
      class="content-box"
      :class="{ 'slide-out': !isContentVisible, 'slide-in': isContentVisible }"
      v-show="true"
    >
      <!-- A nyíl gomb itt marad, de középre igazítjuk jobbra a CSS-ben -->
      <span @click="toggleContentVisibility" class="toggle-button">
        <span :class="{ 'open': isContentVisible }">&#9654;</span>
      </span>

      <div class="h-[37.2dvw] mt-28 border-1 rounded-2xl border-black mx-auto bg-black bg-opacity-10 content-area" style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); overflow-x: hidden; padding: 16px;">
        <div v-if="isContentVisible">
          <div class="flex text-gray-500 text-3xl p-4">
            <h1 @click="toggleModule" :class="['moduls', isOpenModule ? 'text-pink-400' : 'text-gray-500']">Modulok</h1>
            <h1 @click="toggleTasks" :class="['quest', isOpenTasks ? 'text-pink-400' : 'text-gray-500']" style="padding-right: 3.5rem;">Feladatok</h1>
          </div>
          <hr>

          <div v-if="isOpenModule" class="dropdown-content">
            <p v-for="module in modules" :key="module.id">{{ module.title }}</p>
          </div>

          <div class="dropdown-content" :style="{ maxHeight: isOpenTasks ? 'none' : '0', overflow: isOpenTasks ? 'visible' : 'hidden' }">
            <div v-if="isOpenTasks" v-for="task in tasks" :key="task.id" class="task-container">
              <div class="flex items-center w-full" @click="toggleDropdown(task.id)" style="cursor: pointer;">
                <h2 :class="['text-3xl', openTaskId === task.id ? 'text-pink-400' : 'text-gray-500', 'flex-grow', 'truncate']">
                  {{ task.title }}
                </h2>
                <span class="arrow" :class="{ 'open': openTaskId === task.id }" @click.stop="toggleDropdown(task.id)">&#9660;</span>
              </div>
              <div v-if="openTaskId === task.id" class="dropdown-content mt-2">
                <p v-for="(content, index) in task.content" :key="index">{{ content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const modules = [
  { id: 1, title: 'Modul 1 tartalom' },
  { id: 2, title: 'Modul 2 tartalom' },
];

const tasks = [
  { id: 1, title: 'Big Tananyag 1', content: ['Content for dropdown 1', 'More content for dropdown 1', 'Even more content for dropdown 1'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
];

const isOpenModule = ref(false);
const isOpenTasks = ref(true);
const openTaskId = ref(null); 
const isContentVisible = ref(true);

const toggleContentVisibility = () => {
  isContentVisible.value = !isContentVisible.value;
};

const toggleModule = () => {
  isOpenModule.value = !isOpenModule.value;
  if (isOpenModule.value) {
    isOpenTasks.value = false; 
  }
};

const toggleTasks = () => {
  isOpenTasks.value = !isOpenTasks.value;
  if (isOpenTasks.value) {
    isOpenModule.value = false;
  }
};

const toggleDropdown = (taskId) => {
  openTaskId.value = openTaskId.value === taskId ? null : taskId; 
};
</script>

<script setup>
import { ref } from 'vue';

const modules = [
  { id: 1, title: 'Modul 1 tartalom' },
  { id: 2, title: 'Modul 2 tartalom' },
];

const tasks = [
  { id: 1, title: 'Big Tananyag 1', content: ['Content for dropdown 1', 'More content for dropdown 1', 'Even more content for dropdown 1'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
  { id: 2, title: 'Big Tananyag 2', content: ['Content for dropdown 2', 'More content for dropdown 2', 'Even more content for dropdown 2'] },
];

const isOpenModule = ref(false);
const isOpenTasks = ref(true); // A feladatok alapértelmezetten nyitva legyenek
const openTaskId = ref(null); 
const isContentVisible = ref(true);

const toggleContentVisibility = () => {
  isContentVisible.value = !isContentVisible.value;
};

const toggleModule = () => {
  isOpenModule.value = !isOpenModule.value;
  if (isOpenModule.value) {
    isOpenTasks.value = false; 
  }
};

const toggleTasks = () => {
  isOpenTasks.value = !isOpenTasks.value;
  if (isOpenTasks.value) {
    isOpenModule.value = false;
  }
};

const toggleDropdown = (taskId) => {
  openTaskId.value = openTaskId.value === taskId ? null : taskId; 
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  width: 100%;
}

.content-box {
  position: relative;
  width: 80%;
  max-width: 600px;
  transition: transform 0.5s ease;
}

.slide-in {
  transform: translateX(0);
}

.slide-out {
  transform: translateX(-90%);
}

.toggle-button {
  position: absolute;
  top: 50%;
  right: -40px; /* Itt állítjuk be a nyíl pozícióját jobbra */
  transform: translateY(-50%); /* Vertikálisan középre igazítjuk */
  background: transparent;
  border: none;
  font-size: 24px;
  color: #d346f0;
  cursor: pointer;
}

.content-area {
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.flex {
  gap: 10px;
}

.moduls, .quest {
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1.6rem;
  padding: 8px;
  padding-right: 16px;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
}

.arrow.open {
  transform: rotate(90deg);
}

h2 {
  cursor: pointer;
  font-size: 1.5rem;
  overflow: hidden;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
}

h2:hover {
  color: #f472b6;
}

::-webkit-scrollbar {
  width: 12px;
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
