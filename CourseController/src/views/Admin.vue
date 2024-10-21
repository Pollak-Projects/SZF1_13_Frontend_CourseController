<script setup>

import AdminNavbar from "../components/AdminNavbar.vue";
import AdminModule from "../components/AdminModule.vue";

</script>

<template>
  <Teleport to="#rightCol">
    <div class="m-[2dvh_2dvw]">
<!--      TODO add a backbutton to here using prime vue -->
      <RouterLink to="/">

      </RouterLink>
    </div>
  </Teleport>
  <div class="flex flex-col gap-[20dvh]">
    <AdminNavbar />
    <div class="flex flex-col items-center justify-center backdrop-blur-md shadow-figmaxl py-[3dvh] rounded-3xl">
      <div class="flex flex-col gap-[5dvh] mb-[5dvh]">
        <p class="place-self-center">Modulok</p>
        <div class="grid grid-cols-2 gap-[3dvh_5dvw]">
          <AdminModule content="Szerkesztes" />
          <AdminModule content="Bejegyzes" />
          <AdminModule content="Feltoltes" />
          <AdminModule content="Ora" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>