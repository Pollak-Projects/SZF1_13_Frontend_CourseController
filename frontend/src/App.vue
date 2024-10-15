<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
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
