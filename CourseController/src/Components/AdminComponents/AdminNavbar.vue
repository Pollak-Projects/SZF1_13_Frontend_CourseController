<script setup>

const isAdmin = defineModel('isAdmin')

</script>

<template>
<link rel="stylesheet" href="stlye.css">
<div class="flex py-[1.5dvh] bg-[#00000042] shadow sm:text-xl md:text-1xl rounded-b-3xl justify-evenly">
  <RouterLink to="/admin/modules" class="textshadow">Modulok</RouterLink>
  <RouterLink to="/admin/assignments" class="textshadow">Feladatok</RouterLink>
  <RouterLink v-if="isAdmin" to="/admin/users" class="textshadow">Felhasználók</RouterLink>
</div>
</template>

<style scoped>

</style>