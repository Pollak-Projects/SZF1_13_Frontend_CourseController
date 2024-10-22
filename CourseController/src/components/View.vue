<script setup>
import { ref } from 'vue';

const isEditingContent = ref(false);
const isEditingContent1 = ref(false); // Új állapot a content1-hez
const isEditingCode = ref(false);
const content = ref(`
  <h2 class="text-3xl text-cyan-600">HTML alapok 1.</h2>
  <p class="break-words">Ez egy példa szöveg, amely a tartalom szerkesztésére szolgál. Itt sok információ található...</p>
  <p class="break-words">További tartalom, hogy a div túlfolyjon...</p>
  <p class="break-words">Még egy bekezdés, ami biztosítja, hogy a tartalom elérje a div határait.</p>
  <p class="break-words">Még egy bekezdés...</p>
  <p class="break-words">További tartalom, hogy a div túlfolyjon...</p>
`);
const content1 = ref(`
  <h2 class="text-3xl text-cyan-600">HTML alapok 2.</h2>
  <p class="break-words">Ez egy másik példa szöveg, amely a tartalom szerkesztésére szolgál. Itt több információ található...</p>
  <p class="break-words">További tartalom, hogy a div túlfolyjon...</p>
  <p class="break-words">Még egy bekezdés, ami biztosítja, hogy a tartalom elérje a div határait.</p>
  <p class="break-words">Még egy bekezdés...</p>
  <p class="break-words">További tartalom, hogy a div túlfolyjon...</p>
`);

const codeSnippet = ref(`
  <div>
    <h1>Hello, World!</h1>
    <p>Ez egy példa kódrészlet.</p>
  </div>
`);

const toggleEditContent = () => {
  isEditingContent.value = !isEditingContent.value;
};

const toggleEditContent1 = () => {
  isEditingContent1.value = !isEditingContent1.value; // Toggle for content1
};

const toggleEditCode = () => {
  isEditingCode.value = !isEditingCode.value;
};

const saveContent = (event) => {
  content.value = event.target.innerHTML;
  isEditingContent.value = false;
};

const saveContent1 = (event) => {
  content1.value = event.target.innerHTML; // Save content1
  isEditingContent1.value = false;
};

const saveCode = (event) => {
  codeSnippet.value = event.target.innerHTML;
  isEditingCode.value = false;
};
</script>


<template>
  <div class="justify-center items-center h-screen">
    <div class="mt-28 border-1 rounded-2xl border-black mx-auto bg-black bg-opacity-10 mr-28 ml-10" style="height: 75%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); overflow: auto; padding: 16px;">
    <div>
      <h1 class="text-center text-gray-500 text-3xl p-4">HTML Alapok</h1>
    </div>
    <span @click="toggleEditContent" class="edit-icon cursor-pointer">
        ✏️
    </span>
      <div class="content-section">
        <div v-if="isEditingContent" class="editor" contenteditable="true" @blur="saveContent" v-html="content"></div>
        <div v-else v-html="content"></div>
        <div class="edit-icon-container">
        </div>
      </div>
      <span @click="toggleEditContent1" class="edit-icon cursor-pointer">
        ✏️
      </span>
      <div class="content-section">
        <div v-if="isEditingContent1" class="editor" contenteditable="true" @blur="saveContent1" v-html="content1"></div>
        <div v-else v-html="content1"></div>
        <div class="edit-icon-container">

        </div>
      </div>

      <h2 class="text-3xl text-cyan-600">Kódrészlet:</h2>
      <div class="code-section">
        <span @click="toggleEditCode" class="edit-icon cursor-pointer">
          ✏️
        </span>
        <div v-if="isEditingCode" class="code-editor" contenteditable="true" @blur="saveCode" v-html="codeSnippet"></div>
        <pre v-else class="code-snippet" v-html="codeSnippet"></pre>
      </div>
<br><br>
      <h3 class="top">Közzétéve általa: Faur Istán</h3>
      <h3>Közzététel idópontja: 2024. 06. 25.</h3>
      <h3>Utoljára frissítve: 2024. 06. 25</h3>
    </div>
  </div>
</template>



<style scoped>
.editor, .code-editor {
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  min-height: 100px; /* Minimum magasság a szerkesztéshez */
}

.edit-icon {
  cursor: pointer;
  margin-left: 98%;
  font-size: 18px; /* Icon size */
}

.edit-icon-container {
  text-align: right; /* Igazítás jobbra */
  margin-top: 5px; /* Kicsit lejjebb hozza az ikont */
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

