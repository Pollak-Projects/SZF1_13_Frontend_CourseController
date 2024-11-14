<template>
  <div class="home-page">
    <ThemeSwitcher/>
    <div class="top-bar">
      <div class="profile-menu">
        <button @click="toggleProfileMenu" class="user-icon">👤</button>
        <div v-if="showProfileMenu" class="profile-dropdown">
          <button @click="navigateTo('/')">Főoldal</button>
          <button @click="navigateTo('/admin')">Admin</button>
          <button @click="logout">Kijelentkezés</button>
        </div>
      </div>
    </div>
    <div class="kezdolap">
      <h1 class="cim">SZAKMÁK</h1>
      <div class="szakmak-listaja">
        <button
          v-for="(szakma, index) in szakmak"
          :key="index"
          class="szakma-gomb"
          @mouseover="egerFelett(index)"
          @mouseleave="kimenet"
          @click="clickAt"
          :class="{ 'kiemelt': kiemeltIndex === index }"
          :style="getButtonStyle(index)"
        >
          {{ szakma }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useThemeStore } from '../../stores/themeStore.js';
import ThemeSwitcher from '../../Components/ViewComponents/ThemeSwitcher.vue';
import { storeToRefs } from 'pinia';

export default {
  data() {
    return {
      szakmak: [
        "Ipari informatikai technikus",
        "Informatikai alkalmazás- és rendszerüzemeltető technikus",
        "Szoftverfejlesztő- és tesztelő",
        "Erősáramú elektrotechnikus",
        "Közismeret",
      ],
      kiemeltIndex: null,
      showProfileMenu: false,
    };
  },
  computed: {
    // Pinia store-ból hozzuk be a currentTheme értéket
    currentTheme() {
      const themeStore = useThemeStore();
      return themeStore.currentTheme;
    },
  },
  methods: {
    clickAt() {
      this.$router.push('view');
    },
    egerFelett(index) {
      this.kiemeltIndex = index;
    },
    kimenet() {
      this.kiemeltIndex = null;
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
      alert("Kijelentkezés...");
      this.$router.push({ name: "Login" });
    },
    getButtonStyle(index) {
      // A gomb színét a háttér színéhez igazítjuk
      return {
        background: "var(--button-color)" // A CSS változó alkalmazása
      };
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.home-page {
  height: 100vh;



  color: white;
  padding: 0 50px;
  position: relative;
  overflow: hidden;
}
.top-bar {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
.profile-menu {
  position: relative;
}
.user-icon {
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
.profile-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px ;
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
.cim {
  font-size: 90px;
  font-weight: bold;
  position: absolute;
  left: 50px;
  top: 80dvh;
  transform: translateY(-50%);
}
.szakmak-listaja {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: -150px;
  top: 50%;
  transform: translateY(-50%);
}
.szakma-gomb {
  color: rgb(0, 0, 0);
  padding: 20px 30px;
  border-radius: 50px 0px 0px 50px;
  height: 120px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  width: 400px;
  text-align: left;
  filter: blur(3px);
  transform: translateX(50px);
  box-shadow: 0px 0px 10px 0px #000000;
}
.szakma-gomb.kiemelt {
  transform: translateX(-150px);
  filter: blur(0);
  box-shadow: 0px 0px 25px 1px #000000;
}
</style>
