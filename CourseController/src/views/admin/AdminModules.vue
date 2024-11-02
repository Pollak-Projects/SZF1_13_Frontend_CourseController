
<link rel="stylesheet" href="style.css"></link>
<script>
import AdminNavbar from "../../components/AdminNavbar.vue";
import AdminModule from "../../components/AdminModule.vue";
import {provide, ref} from "vue";

export default {
  components: {AdminModule, AdminNavbar},
  name: 'Modules',
  setup(){
    const isAdmin = ref(false)

    provide('isAdmin', isAdmin)

    const toggleAdmin = () => {
      isAdmin.value = !isAdmin.value
    }
    return {
      toggleAdmin,
      isAdmin
    }
  }
}


</script>



<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar v-model:isAdmin="isAdmin" />
    <div class="flex flex-col items-center justify-center backdrop-blur-md shadow-figmaxl py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <div class="flex flex-col gap-[3vh] sm:gap-[4vh] md:gap-[5vh] mb-[5vh]">
        <p class="place-self-center text-lg sm:text-xl md:text-4xl">Modulok</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[3vh] gap-x-[5vw]">
          <AdminModule class="rounded-lg p-3 place-self-center sm:text-xl md:text-1xl bg-black/40 shadow-lg shadow-black/80" content="Bejegyzés" />
          <AdminModule class="rounded-lg p-3 place-self-center sm:text-xl md:text-1xl bg-black/40 shadow-lg shadow-black/80" content="Kategória" />
          <AdminModule class="rounded-lg p-3 place-self-center sm:text-xl md:text-1xl bg-black/40 shadow-lg shadow-black/80" content="Szakma választás" />
          <AdminModule class="rounded-lg p-3 place-self-center sm:text-xl md:text-1xl bg-black/40 shadow-lg shadow-black/80" content="Évfolyam" />
          <Button class="rounded-lg" label="Feltoltes" />
          <Button class="rounded-lg" label="Szerkesztes" />
          <Button label="Mentés" />
          <Button label="Switch admin" icon="pi pi-cog" @click="toggleAdmin" />
        </div>
      </div>
    </div>
  </div>
</template>
