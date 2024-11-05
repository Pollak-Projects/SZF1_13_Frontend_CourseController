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
      buttonColors: [
        "rgba(23, 111, 71, 1)",
        "rgba(71, 122, 36, 1)",
        "rgba(128, 180, 20, 1)",
        "rgba(158, 210, 6, 1)",
        "rgba(188, 247, 65, 1)"
      ],
      highlightedColors: [
      "rgba(23, 111, 71, 1)",
        "rgba(71, 122, 36, 1)",
        "rgba(128, 180, 20, 1)",
        "rgba(177, 230, 6, 1)",
        "rgba(196, 237, 65, 1)"
      ]
    };
  },
  methods: {
    clickAt() {
      this.$router.push('view')
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
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(
  at 0% 0%, #000000 0px, transparent 50%),
   radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000c0 0px, transparent 50%), 
   radial-gradient(at 39.054951513370554% 97.9845146871009%, #034749 0px, transparent 50%), 
   radial-gradient(at 19.054951513370554% 97.9845146871009%, #034749 0px, transparent 50%),
   radial-gradient(at 47.71672054069938% 38.11222860791827%, #4c9608 0px, transparent 50%), 
   radial-gradient(at 67.71672054069938% 98.11222860791827%, #4c9608 0px, transparent 50%), 
   radial-gradient(at 63.052600646488386% 92.55667305236271%, #4c9608 0px, transparent 50%), 
   radial-gradient(at 153.052600646488386% 42.55667305236271%, #ebe95cb7 0px, transparent 50%), 
   radial-gradient(at 113.052600646488386% 82.55667305236271%, #ebe95cb7 0px, transparent 50%),
   radial-gradient(at 113.052600646488386% 2.55667305236271%, #f0efb1b7 0px, transparent 50%),
   radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #09525f;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
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
  font-size: 17vh;
  font-weight: bold;
  position: absolute;
  left: 50px;
  top: 79dvh;
  transform: translateY(-50%);
  transition: 0.2s;
}

@media (max-width: 1100px) {
    .cim{
      font-size: 12vh;
      top: 81dvh;
  }
}

@media (max-width: 880px) {
  .cim{
      font-size: 8vh;
      top: 82.5dvh;
  }
}

@media (max-width: 660px) {
    .cim{
      font-size: 5vh;
      top: 83.5dvh;
  }
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
