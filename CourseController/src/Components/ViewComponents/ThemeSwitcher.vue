<script setup>
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/themeStore.js';
import { watch } from "vue";

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
const updateTheme = (theme) => {
  themeStore.setTheme(theme);
};
watch(currentTheme, (newTheme) => { 
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
</script>
<template>
  <div class="theme-switcher">
    <label>
      <input type="radio" name="theme" value="purple" @change="updateTheme('purple')" :checked="currentTheme === 'purple'" />
      Purple
    </label>
    <label>
      <input type="radio" name="theme" value="green" @change="updateTheme('green')" :checked="currentTheme === 'green'" />
      Green
    </label>
    <label>
      <input type="radio" name="theme" value="default" @change="updateTheme('default')" :checked="currentTheme === 'default'" />
      Default
    </label>
    <div class="card">
      <h2>Card Title</h2>
      <p>This is a card component. The theme switcher will change its styles.</p>
      <button class="primary-button">Primary Button</button>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" />
    </div>
  </div>
</template>
<style>
h1 {
  color: var(--primary-color);
  margin-bottom: 20px;
}
.card {
  background-color: var(--background-color);
  border: 1px solid var(--primary-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.primary-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.primary-button:hover {
  background-color: darken(var(--primary-color), 10%);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  color: var(--text-color);
}
.form-group input {
  padding: 10px;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  width: 100%;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}
.form-group input:focus {
  outline: none;
  border-color: darken(var(--primary-color), 10%);
  background-color: lighten(var(--background-color), 5%);
  color: var(--text-color);
}
</style>