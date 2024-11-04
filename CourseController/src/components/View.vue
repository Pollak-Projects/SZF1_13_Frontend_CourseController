<script setup>
import { ref } from 'vue';

const contents = ref([
  {
    id: 1,
    title: 'HTML alapok 1.',
    content: `...asdfghjkjksdfhvkjsdfnvjkdsbfhjkasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsbjkfdsbhfhjkbdshjkfbdhjsfbhjdsbfhdsvhjfbvdshjfbgdsiukjfbhdijksubfhiudfjksbghfjkdfsbgghijuzdgsioufdhdfiuzghiuzdfh`,
    code: `...asdasbdjkfvhdfhijkuvbndfhjbfghjdfgdfikuhjfgioudfhfijkudfhfgiuhdfijugvhdsiufghdfikughdfhjbghjdfghijkdghikudfhg`,
  },
  {
    id: 2,
    title: 'HTML alapok 2.',
    content: `...`,
    code: `...`,
  },
]);

const lastUpdated = ref(new Date().toLocaleDateString('hu-HU'));
const isEditing = ref(false); // Állapot a szerkesztéshez

const toggleEdit = () => {
  isEditing.value = !isEditing.value; // Szerkesztési állapot váltása
};

const saveContent = (index, event) => {
  contents.value[index].content = event.target.innerHTML;
  isEditing.value = false; // Leállítja a szerkesztést
  lastUpdated.value = new Date().toLocaleDateString('hu-HU');
};

const saveCode = (index, event) => {
  contents.value[index].code = event.target.innerHTML;
  isEditing.value = false; // Leállítja a szerkesztést
  lastUpdated.value = new Date().toLocaleDateString('hu-HU');
};
</script>

<template>
  <div class="justify-center items-center h-screen  view-container">
    <div class="container mx-auto mt-28 border-1 rounded-2xl border-black bg-black bg-opacity-10" style="height: 75vh; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; padding: 16px;">
      <div>
        <h1 class="text-center text-pink-500 text-3xl p-4">HTML Alapok</h1>
      </div>
      <span @click="toggleEdit" class="edit-icon cursor-pointer" style="margin-left: auto;">✏️</span>
      <div class="flex-grow overflow-auto">
        <div v-for="(item, index) in contents" :key="item.id" class="content-section mb-4">
          <div class="flex items-center mb-2">
            <h2 class="mr-2">{{ item.title }}</h2>
          </div>
          <div v-if="isEditing" class="editor" contenteditable="true" @blur="saveContent(index, $event)" v-html="item.content"></div>
          <div v-else class="content" v-html="item.content"></div>

          <div class="flex items-center justify-between mt-4">
            <span class="mr-2">Kód:</span>
          </div>
          <div v-if="isEditing" class="code-editor" contenteditable="true" @blur="saveCode(index, $event)" v-html="item.code"></div>
          <pre v-else class="code-snippet" v-html="item.code"></pre>
        </div>
      </div>

      <div class="text-right mt-4">
        <h3 class="top">Közzétéve általa: Faur Istán</h3>
        <h3>Közzététel időpontja: 2024. 06. 25.</h3>
        <h3>Utoljára frissítve: {{ lastUpdated }}</h3>
      </div>
    </div>
  </div>
</template>



<style scoped>
.view-container {
  transition: transform 0.5s ease;
  margin-right: 100px;
}

.flex-grow {
  transition: flex-grow 0.5s; /* Animáció a flex-grow-ra */
}
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
  margin-right: auto; /* Jobb margó a cím és az ikon között */
}

.editor, .code-editor {
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  min-height: 100px; /* Minimum magasság a szerkesztéshez */
  width: 100%; /* Teljes szélesség */
  box-sizing: border-box; /* Tartalom méretezése */
}

.content {
  max-width: 100%; /* Maximum szélesség */
  word-wrap: break-word; /* Szó törés engedélyezése */
  overflow-wrap: break-word; /* Szó törés engedélyezése */
  white-space: normal; /* Normál szókezelés */
}

.code-snippet {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px;
  border-radius: 8px;
  overflow: auto; /* Csak a kódnál maradjon scroll */
  backdrop-filter: blur(5px);
  white-space: pre-wrap; /* Fehér térköz megőrzése és sortörés engedélyezése */
  max-width: 100%; /* Maximum szélesség */
  word-wrap: break-word; /* Szó törés engedélyezése */
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
