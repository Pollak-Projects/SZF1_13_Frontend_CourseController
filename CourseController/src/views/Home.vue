<script setup>

import Login from '../components/Login.vue';
let check = false;
function toggleLogin (){
  check = true;
  console.log(check)
}
</script>

<template>
<!--  TODO this is where the dashboard may go in the future-->
<div class="flex py-[0.5dvh] rounded-b-3xl shadow-figmaxl justify-evenly">
  <button @click="check = !check">Bejelentkezés</button>
</div>
<div v-if="check"><Login/></div>
</template>

<style scoped>

</style>