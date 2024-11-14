// src/stores/themeStore.js
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: '',  
  }),
  actions: {

    loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.currentTheme = savedTheme;
      } else {
        this.currentTheme = 'white';  
      }
    },
    

    setTheme(theme) {
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);  
    },
  },
});
