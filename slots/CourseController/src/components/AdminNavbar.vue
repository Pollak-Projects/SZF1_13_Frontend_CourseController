<script setup>
const isAdmin = defineModel('isAdmin')

</script>

<template>
<!--  TODO add actual buttons with pages behind them-->
<div class="flex py-[0.5dvh] rounded-b-3xl shadow-figmaxl justify-evenly">
  <p>Modulok</p>
  <p>Feladatok</p>
  <p v-if="isAdmin">Felhasznalok</p>
</div>
</template>

<style scoped>

</style>