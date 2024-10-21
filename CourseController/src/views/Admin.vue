<script setup>
import AdminNavbar from "../components/AdminNavbar.vue";
import AdminModule from "../components/AdminModule.vue";
import {provide, ref} from "vue";
import BaseLayout from "../slots/BaseLayout.vue";

const isAdmin = ref(false)

provide('isAdmin', isAdmin)

const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value
}

</script>

<template>

  <BaseLayout>
    <template #left>
      <Teleport to="#rightCol">
        <div class="m-[2dvh_2dvw]">
          <RouterLink to="/">
            <Button icon="pi pi-arrow-left" aria-label="Back" />
          </RouterLink>
        </div>
      </Teleport>
    </template>
    <template #main>
      <div class="flex flex-col gap-[20dvh]">
        <AdminNavbar v-model:isAdmin="isAdmin" />
        <div class="flex flex-col items-center justify-center backdrop-blur-md shadow-figmaxl py-[3dvh] rounded-3xl">
          <div class="flex flex-col gap-[5dvh] mb-[5dvh]">
            <p class="place-self-center">Modulok</p>
            <div class="grid grid-cols-2 gap-[3dvh_5dvw]">
              <AdminModule content="Szerkesztes" />
              <AdminModule content="Bejegyzes" />
              <AdminModule content="Feltoltes" />
              <AdminModule content="Ora" />
              <Button label="Switch admin" icon="pi pi-cog" @click="toggleAdmin"  />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #right>
      <UserIcon/>
    </template>
  </BaseLayout>



</template>

<style scoped>

</style>