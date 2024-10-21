<script setup>
import UserIcon from "./components/UserIcon.vue";
import BaseLayout from "./slots/BaseLayout.vue";
import AdminNavbar from "./components/AdminNavbar.vue";
import AdminModule from "./components/AdminModule.vue";
</script>

<template>
<!--  This background isn't in the design its just a placeholder for now -->

  <RouterView />

    <user-icon/>



</template>

<style scoped>

</style>
