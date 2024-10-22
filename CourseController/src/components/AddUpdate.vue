<template>
  <div class="markdown-editor">
    <div class="toolbar">
      <button @click="addBold">Vastag</button>
      <button @click="addItalic">Dőlt</button>
      <button @click="addStriketrough">Áthúzás</button>
      <button @click="addHeading">Cím</button>
      <button @click="addLink">Link</button>
      <button @click="undo">Vissza</button>
      <button @click="redo">Előre</button>
    </div>
    <textarea ref="textarea" v-model="markdown" placeholder="Írd ide a Markdown szöveget..." @input="saveHistory"></textarea>
    <div class="preview" v-html="compiledMarkdown"></div>
  </div>
</template>




<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      markdown: '',
      history: [],
      historyIndex: -1,
      lastSaved: '',  // Az utolsó mentett állapotot tároljuk
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown);
    }
  },
  methods: {
    addBold() {
      this.wrapSelection("**");
    },
    addItalic() {
      this.wrapSelection("*");
    },
    addStriketrough() {
      this.wrapSelection("~~");
    },
    addHeading() {
      this.insertSelection("## ");
    },
    addLink() {
      this.linkSelection("[](url)");
    },

    undo() {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.markdown = this.history[this.historyIndex] || '';
      }
    },

    redo() {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.markdown = this.history[this.historyIndex] || '';
      }
    },

    saveHistory(event) {
      const specialKeys = [' ', '\n', '.', ',', '!', '?', ';', ':'];

      if (this.markdown !== this.lastSaved) {
        if (specialKeys.includes(event.data)) {
          if (this.historyIndex === this.history.length - 1) {
            this.history.push(this.markdown);
          } else {
            this.history = this.history.slice(0, this.historyIndex + 1);
            this.history.push(this.markdown);
          }
          this.historyIndex = this.history.length - 1;
          this.lastSaved = this.markdown; 
        }
      }
    },

    linkSelection() {
      const textarea = this.$refs.textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = this.markdown.substring(start, end);
      
      if (selectedText) {
        const newText = `[${selectedText}](url)`;
        this.markdown = this.markdown.substring(0, start) + newText + this.markdown.substring(end);
        
        this.$nextTick(() => {
          textarea.selectionStart = start + newText.length - 5;
          textarea.selectionEnd = start + newText.length - 1;
          textarea.focus();
        });
      } else {
        this.insertAtCursor("[link](url)");
      }
    },

    insertSelection(insert) {
      const textarea = this.$refs.textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = this.markdown.substring(start, end);
      
      if (selectedText) {
        const newText = `${insert}${selectedText}`;
        this.markdown = this.markdown.substring(0, start) + newText + this.markdown.substring(end);
        
        this.$nextTick(() => {
          textarea.selectionStart = textarea.selectionEnd = start + newText.length;
          textarea.focus();
        });
      } else {
        this.insertAtCursor(`${insert}szöveg`);
      }
    },

    wrapSelection(wrapper) {
      const textarea = this.$refs.textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = this.markdown.substring(start, end);
      
      if (selectedText) {
        const newText = `${wrapper}${selectedText}${wrapper}`;
        this.markdown = this.markdown.substring(0, start) + newText + this.markdown.substring(end);
        
        this.$nextTick(() => {
          textarea.selectionStart = textarea.selectionEnd = start + newText.length;
          textarea.focus();
        });
      } else {
        this.insertAtCursor(`${wrapper}text${wrapper}`);
      }
    },

    insertAtCursor(text) {
      const textarea = this.$refs.textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      this.markdown = this.markdown.substring(0, start) + text + this.markdown.substring(end);
      
      this.$nextTick(() => {
        textarea.selectionStart = textarea.selectionEnd = start + text.length;
        textarea.focus();
      });
    }
  },
  mounted() {
    this.history.push(this.markdown);
    this.historyIndex = 0;
    this.lastSaved = this.markdown;
  }
};
</script>



<style scoped>
.markdown-editor {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.toolbar {
  margin-bottom: 10px;
}
button {
  margin-right: 5px;
  cursor: pointer;
}
textarea {
  flex: 1;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
}
.preview {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  overflow-y: auto;
}
</style>
