<script setup>

import AdminNavbar from "../AdminNavbar.vue";
import AdminModule from "../AdminModule.vue";
</script>

<template>
  <Teleport to="#pageSpecificNavbar">
    <AdminNavbar />
  </Teleport>
  <div>
    <div>
      <p>Modulok</p>
      <div>
        <AdminModule content="Szerkesztes" />
        <AdminModule content="Bejegyzes" />
        <AdminModule content="Feltoltes" />
        <AdminModule content="ora" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>