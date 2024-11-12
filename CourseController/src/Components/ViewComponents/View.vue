<template>
  <div class="justify-center items-center h-screen view-container">
    <div class="container mx-auto mt-28 border-1 rounded-2xl border-black bg-black bg-opacity-10"
         style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; padding: 16px; height: 75vh;">
      
      <div>
        <h1 class="text-center text-pink-500 text-3xl p-4">{{ item.title }}</h1>
      </div>

      <!-- Tailwind preline reconfiguration for new use of working good -->


      <span @click="toggleVisibility" class="edit-icon cursor-pointer" style="margin-left: auto;">✏️</span>

      <!-- Görgethető tartalom -->
      <div class="flex-grow overflow-auto custom-scrollbar">
        <div v-for="(item, index) in contents" :key="item.id" class="content-section mb-4">
          <div class="flex items-center mb-2">
            <h2
              v-if="isEditing"
              contenteditable="true"
              @blur="saveTitle(index, $event)"
              class="editable-title"
            >
              {{ item.title }}
            </h2>
            <h2 v-else class="mr-2">{{ item.title }}</h2>
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
        <button @click="addNewSection" class="add-section-btn pb-3">Új rész hozzáadása</button>
        <button 
          @click="removeLastSection" 
          class="remove-section-btn pb-3 ml-4" 
          :disabled="contents.length <= 1"
          :class="{ 'opacity-50 cursor-not-allowed': contents.length <= 1 }">
          Utolsó elem törlése
        </button>

        <div class="containerr">
        <h3>Közzétéve általa: Faur Istán</h3>
        <h3>Közzététel időpontja: 2024. 06. 25.</h3>
        <h3>Utoljára frissítve: {{ lastUpdated }}</h3> <!-- Dinamikus frissítési dátum -->
     </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const contents = ref([
      {
        id: 1,
        title: 'HTML alapok',
        content: ``,
        code: `...asdasbdjkfvhdfhijkudfikughdfhjbghjdfghijkdghikudfhg`,
      },
    ]);
    const isEditing = ref(false); // Szerkesztés állapota
    const lastUpdated = ref("2024. 10. 30."); // Utolsó frissítés dátuma

    const toggleVisibility = () => {
      isEditing.value = !isEditing.value;
    };

    const saveContent = (index, event) => {
      contents.value[index].content = event.target.innerHTML;
      isEditing.value = false;
      lastUpdated.value = new Date().toLocaleDateString('hu-HU');
    };

    const saveCode = (index, event) => {
      contents.value[index].code = event.target.innerHTML;
      isEditing.value = false; // Leállítja a szerkesztést
      lastUpdated.value = new Date().toLocaleDateString('hu-HU');
    };

    const saveTitle = (index, event) => {
      contents.value[index].title = event.target.innerHTML;
      isEditing.value = false; // Leállítja a szerkesztést
      lastUpdated.value = new Date().toLocaleDateString('hu-HU');
    };

    const addNewSection = () => {
      const newId = Math.max(...contents.value.map(item => item.id)) + 1; // Új id generálása
      contents.value.push({
        id: newId,
        title: `Új rész ${newId}`,
        content: `Ez az új rész tartalma.`,
        code: `&lt;div&gt;Új rész ${newId}&lt;/div&gt;`
      });
      lastUpdated.value = new Date().toLocaleDateString('hu-HU'); // Frissítés dátuma
    };

    const removeLastSection = () => {
      if (contents.value.length > 1) { // Csak akkor törlünk, ha több mint egy elem van
        contents.value.pop(); // Az utolsó szekció eltávolítása
        lastUpdated.value = new Date().toLocaleDateString('hu-HU'); // Frissítés dátuma
      }
    };

    const goBack = () => {
      window.history.back(); // Vissza navigálás az előző oldalra
    };

    return {
      contents,
      isEditing,
      lastUpdated,
      toggleVisibility,
      saveContent,
      saveCode,
      saveTitle,
      addNewSection,
      removeLastSection,
      goBack
    };
  }
};
</script>

<style scoped>

.containerr{
  display: flex;
  justify-content: space-between; /* Elosztja a három elemet szélesség szerint */
  align-items: center;
}

h3 {
  margin: 0; /* Eltávolítja az alapértelmezett margót */
}
h3:first-child {
  text-align: left; /* Balra igazítja az első elemet */
}
h3:nth-child(2) {
  text-align: center; /* Középre igazítja a második elemet */
}
h3:last-child {
  text-align: right; /* Jobbra igazítja az utolsó elemet */
}


.back-button {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.back-button:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.9);
}

/* Gomb letiltott állapotának stílusa */
.remove-section-btn:disabled {
  color: #e6e6e6; /* Szürke szöveg */
  cursor: not-allowed; /* Nem választható kurzor */
}

.remove-section-btn.opacity-50 {
  opacity: 0.5;
}

/* További stílusok maradnak változatlanok */

/* Gomb stílus */
.add-section-btn {
  font-size: large;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.view-container {
  transition: transform 0.5s ease-in-out;
  transform: translateX(0);
}

.view-container.hidden {
  transform: translateX(100%);
}

.flex-grow {
  transition: flex-grow 0.5s ease;
}

.content-section {
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.editor, .code-editor {
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  min-height: 100px;
  width: 100%;
  box-sizing: border-box;
}

.content {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.code-snippet {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  backdrop-filter: blur(5px);
  white-space: pre-wrap;
  max-width: 100%;
}



.top {
  padding-top: 0.3dvw;
}

.custom-scrollbar {
  padding-right: 16px;
  max-height: 60vh; /* Ha fix méretű területet szeretnél, például a magasságot csökkentheted */
  overflow-y: auto; /* Görgetés engedélyezése */
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

/* Gomb stílus */
.add-section-btn {
  font-size: large;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}


.editable-title {
  font-size: 20px;
  color: #444;
  outline: none;
  border-bottom: 1px solid #d346f0;
}
</style>
