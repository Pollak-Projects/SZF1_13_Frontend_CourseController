<script setup>

const isAdmin = defineModel('isAdmin')

</script>

<template>

<div class="flex py-[0.5dvh] rounded-b-3xl shadow-figmaxl justify-evenly">
  <RouterLink to="/admin/modules">Modulok</RouterLink>
  <RouterLink to="/admin/assignments">Feladatok</RouterLink>
  <RouterLink v-if="isAdmin" to="/admin/users">Felhasználók</RouterLink>
</div>
</template>

<style scoped>

</style>