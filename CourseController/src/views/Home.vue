<template>
  <div class="home-page">
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
export default {
  data() {
    return {
      szakmak: [
        "Ipari informatikai technikus",
        "Informatikai alkalmazás",
        "Szoftverfejlesztő",
        "Erősáramú szakember",
        "Közmű szakember",
      ],
      kiemeltIndex: null,
      showProfileMenu: false,
      buttonColors: [
        "rgba(23, 81, 71, 1)",
        "rgba(71, 122, 36, 1)",
        "rgba(128, 180, 20, 1)",
        "rgba(177, 230, 6, 1)",
        "rgba(196, 237, 65, 1)"
      ],
      highlightedColors: [
      "rgba(23, 81, 71, 1)",
        "rgba(71, 122, 36, 1)",
        "rgba(128, 180, 20, 1)",
        "rgba(177, 230, 6, 1)",
        "rgba(196, 237, 65, 1)"
      ]
    };
  },
  methods: {
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
      return {
        background: this.kiemeltIndex === index
          ? this.highlightedColors[index]
          : this.buttonColors[index]
      };
    }
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.home-page {
  height: 100vh;
  background: linear-gradient(150deg, black, #003e4c, #00ff00);
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
.cim {
  font-size: 90px;
  font-weight: bold;
  position: absolute;
  left: 50px;
  top: 70%;
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
  border-radius: 30px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  width: 300px;
  text-align: left;
  filter: blur(3px);
  transform: translateX(50px);
}
.szakma-gomb.kiemelt {
  transform: translateX(-150px);
  filter: blur(0);
}
</style>
