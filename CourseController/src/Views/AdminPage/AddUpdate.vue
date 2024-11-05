<template>
  <div class="editor-page">
    <div class="top-bar">
      <button @click="goHome" class="back-button">←</button>
      <h1 class="title">Szerkesztő</h1>
      <div class="profile-menu">
        <button @click="toggleProfileMenu" class="user-icon">👤</button>
        <div v-if="showProfileMenu" class="profile-dropdown">
          <button @click="navigateTo('/')">Home</button>
          <button @click="navigateTo('/admin')">Admin</button>
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>

    <div class="editor-container">
      <div class="toolbar">
        <button @click="deleteWord" class="toolbar-button" title="Delete Word Left">⬅️</button>
        <button @click="undoDelete" class="toolbar-button" title="Undo Delete">➡️</button>
        <button @click="applyMarkdown('heading')" class="toolbar-button" title="Heading">🔠</button>
        <button @click="applyMarkdown('bold')" class="toolbar-button" title="Bold"><strong>B</strong></button>
        <button @click="applyMarkdown('italic')" class="toolbar-button" title="Italic"><em>I</em></button>
        <button @click="applyMarkdown('strikethrough')" class="toolbar-button" title="Strikethrough">S̶</button>
        <button @click="applyMarkdown('unordered-list')" class="toolbar-button" title="Unordered List">•</button>
        <button @click="applyMarkdown('ordered-list')" class="toolbar-button" title="Ordered List">1.</button>
        <button @click="applyMarkdown('quote')" class="toolbar-button" title="Quote">❝</button>
        <button @click="applyMarkdown('link')" class="toolbar-button" title="Link">🔗</button>
        <button @click="applyMarkdown('image')" class="toolbar-button" title="Image">🖼️</button>
        <button @click="applyMarkdown('code')" class="toolbar-button" title="Code">📄</button>
        <button @click="togglePreview" class="toolbar-button" title="Preview">👁️</button>
        <button @click="toggleFullScreen" class="toolbar-button" title="Fullscreen">⛶</button>
      </div>

      <div class="editor-pane">
        <textarea v-show="!isPreview" ref="editor" class="editor" v-model="markdownText" placeholder="Ide írj...."></textarea>
        <div class="preview" v-html="renderedMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "AddUpdate",
  data() {
    return {
      markdownText: "",
      isPreview: false,
      showProfileMenu: false,
      deletedWords: [],
    };
  },
  computed: {
    renderedMarkdown() {
      return marked(this.markdownText);
    },
  },
  methods: {
    applyMarkdown(action) {
      const textarea = this.$refs.editor;
      const { selectionStart, selectionEnd } = textarea;
      const selectedText = this.markdownText.substring(selectionStart, selectionEnd);

      let markdownSyntax = "";
      switch (action) {
        case "heading":
          markdownSyntax = `# ${selectedText}`;
          break;
        case "bold":
          markdownSyntax = `**${selectedText}**`;
          break;
        case "italic":
          markdownSyntax = `*${selectedText}*`;
          break;
        case "strikethrough":
          markdownSyntax = `~~${selectedText}~~`;
          break;
        case "unordered-list":
          markdownSyntax = `- ${selectedText}`;
          break;
        case "ordered-list":
          markdownSyntax = `1. ${selectedText}`;
          break;
        case "quote":
          markdownSyntax = `> ${selectedText}`;
          break;
        case "link":
          markdownSyntax = `[${selectedText}](url)`;
          break;
        case "image":
          markdownSyntax = `![${selectedText}](image-url)`;
          break;
        case "code":
          markdownSyntax = `\`\`\`\n${selectedText}\n\`\`\``;
          break;
        default:
          break;
      }

      this.insertText(markdownSyntax);
    },
    insertText(markdownSyntax) {
      const textarea = this.$refs.editor;
      const { selectionStart, selectionEnd } = textarea;

      this.markdownText =
        this.markdownText.substring(0, selectionStart) +
        markdownSyntax +
        this.markdownText.substring(selectionEnd);

      this.$nextTick(() => {
        textarea.focus();
        textarea.setSelectionRange(
          selectionStart,
          selectionStart + markdownSyntax.length
        );
      });
    },
    deleteWord() {
      const textarea = this.$refs.editor;
      const { selectionStart } = textarea;
      const words = this.markdownText.substring(0, selectionStart).trim().split(" ");
      const lastWord = words.pop();
      const lastSpaceIndex = this.markdownText.lastIndexOf(" ", selectionStart - lastWord.length - 1);
      const wordToDelete = lastWord + (lastSpaceIndex !== -1 ? " " : "");

      if (wordToDelete) {
        this.deletedWords.push(wordToDelete.trim());
        this.markdownText = this.markdownText.substring(0, lastSpaceIndex + 1) + this.markdownText.substring(selectionStart);

        this.$nextTick(() => {
          textarea.focus();
          textarea.setSelectionRange(lastSpaceIndex + 1, lastSpaceIndex + 1);
        });
      }
    },
    undoDelete() {
      const textarea = this.$refs.editor;
      if (this.deletedWords.length > 0) {
        const lastDeletedWord = this.deletedWords.pop();
        const selectionStart = this.$refs.editor.selectionStart;

        this.markdownText =
          this.markdownText.substring(0, selectionStart) +
          lastDeletedWord +
          this.markdownText.substring(selectionStart);

        this.$nextTick(() => {
          textarea.focus();
          textarea.setSelectionRange(selectionStart, selectionStart + lastDeletedWord.length);
        });
      }
    },
    togglePreview() {
      this.isPreview = !this.isPreview;
    },
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        this.$el.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    },
    goHome() {
      this.$router.push('/');
    },
    toggleProfileMenu() {
      this.showProfileMenu = !this.showProfileMenu;
    },
    navigateTo(path) {
      this.showProfileMenu = false;
      this.$router.push(path);
    },
    logout() {
      this.showProfileMenu = false;
      alert("Logging out...");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.editor-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #1d2a3c, #708a5d);
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  color: white;
}

.back-button,
.user-icon {
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.profile-menu {
  position: relative;
}

.profile-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.profile-dropdown button {
  background: none;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;
}

.profile-dropdown button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.editor-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  height: 70%;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.toolbar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 10px;
}

.toolbar-button {
  font-size: 18px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

.toolbar-button:hover {
  color: #ddd;
}

.editor-pane {
  display: flex;
  width: 100%;
  height: calc(100% - 40px);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.editor {
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  color: #fff;
  border: none;
  outline: none;
  resize: none;
}

.preview {
  width: 50%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.15);
  color: #fff;
  overflow-y: auto;
}
</style>
