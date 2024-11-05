<script setup>
import { ref } from 'vue';

const contents = ref([
  {
    id: 1,
    title: 'HTML alapok 1.',
    content: `...asdfghjkjksdfhvkjsdfnvjkdsbfhjkdsbjkfdsbhfhjkbdshjkfbdhjsfbhjdsbfhdsvhjfbvdshjfbgdsiukjfbhdijksubfhiudfjksbghfjkdfsbgghijuzdgsioufdhdfiuzghiuzdfh`,
    code: `...asdasbdjkfvhdfhijkuvbndfhjbfghjdfgdfikuhjfgioudfhfijkudfhfgiuhdfijugvhdsiufghdfikughdfhjbghjdfghijkdghikudfhg`,
    isEditingContent: false,
    isEditingCode: false,
  },
  {
    id: 2,
    title: 'HTML alapok 2.',
    content: `...`,
    code: `...`,
    isEditingContent: false,
    isEditingCode: false,
  },
]);

const lastUpdated = ref(new Date().toLocaleDateString('hu-HU')); // Aktuális dátum formázva

const toggleEditContent = (index) => {
  contents.value[index].isEditingContent = !contents.value[index].isEditingContent;
};

const toggleEditCode = (index) => {
  contents.value[index].isEditingCode = !contents.value[index].isEditingCode;
};

const saveContent = (index, event) => {
  contents.value[index].content = event.target.innerHTML;
  contents.value[index].isEditingContent = false;
  lastUpdated.value = new Date().toLocaleDateString('hu-HU');
   // Dátum frissítése
};

const saveCode = (index, event) => {
  contents.value[index].code = event.target.innerHTML;
  contents.value[index].isEditingCode = false;
  lastUpdated.value = new Date().toLocaleDateString('hu-HU'); // Dátum frissítése
};
</script>

<template>
  <div class="justify-center items-center h-screen">
    <div class="mt-28 border-1 rounded-2xl border-black mx-auto bg-black bg-opacity-10 mr-28 ml-10" style="height: 75%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); overflow: auto; padding: 16px;">
      <div>
        <h1 class="text-center text-gray-500 text-3xl p-4">HTML Alapok</h1>
      </div>
      <div v-for="(item, index) in contents" :key="item.id" class="content-section mb-4">
        <div class="flex items-center mb-2">
          <h2 class="mr-2">{{ item.title }}</h2>
          <span @click="toggleEditContent(index)" class="edit-icon cursor-pointer">✏️</span>
        </div>
        <div v-if="item.isEditingContent" class="editor" contenteditable="true" @blur="saveContent(index, $event)" v-html="item.content"></div>

        <div v-else v-html="item.content"></div>

        <div class="flex items-center justify-between mt-4">
          <span class="mr-2">Kód:</span>
          <span @click="toggleEditCode(index)" class="edit-icon cursor-pointer edit-codeI">✏️</span>
        </div>
        <div v-if="item.isEditingCode" class="code-editor" contenteditable="true" @blur="saveCode(index, $event)" v-html="item.code"></div>
        <pre v-else class="code-snippet" v-html="item.code"></pre>
      </div>

      <div class="mt-10">
        <h3 class="top">Közzétéve általa: Faur Istán</h3>
        <h3>Közzététel időpontja: 2024. 06. 25.</h3>
        <h3>Utoljára frissítve: {{ lastUpdated }}</h3> <!-- Dinamikus frissítési dátum -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex; /* Flexbox beállítása */
}

.items-center {
  align-items: center; /* Vertikális középre igazítás */
}

.mb-2 {
  margin-bottom: 0.5rem; /* Alsó margó a cím és az editor között */
}

.mr-2 {
  margin-right: 83.8%; /* Jobb margó a cím és az ikon között */
}

.editor, .code-editor {
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  min-height: 100px; /* Minimum magasság a szerkesztéshez */
}
.edit-codeI{
  margin-left: 11.5%
}
.edit-icon {
  cursor: pointer;
  font-size: 18px; /* Icon size */
}

.code-snippet {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  backdrop-filter: blur(5px);
  white-space: pre; /* Preserve whitespace */
}

h3 {
  font-style: italic;
  color: rgb(206, 206, 206);
  text-align: right;
}

.top {
  padding-top: 0.3dvw;
}

/* Scrollbar styling */
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
