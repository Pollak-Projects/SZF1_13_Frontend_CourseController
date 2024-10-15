<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="flex items-center h-[100dvh]">
    <div>
      <div id="backButton"></div>
      <div id="pageSpecificNavbar"></div>
      <div>
        <button>User</button>
        <div>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </div>
      </div>
    </div>
    <main>
      <RouterView />
    </main>
  </div>


</template>

<style scoped>

</style>
