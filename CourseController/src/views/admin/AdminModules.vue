
<link rel="stylesheet" href="style.css"></link>

<script>
import AdminNavbar from "../../components/AdminNavbar.vue";
import AdminModule from "../../components/AdminModule.vue";
import {provide, ref} from "vue";

export default {
  components: {AdminModule, AdminNavbar},
  name: 'Modules',
  methods:{
    edit() {
      this.$router.push('/edit');
    }
  },
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

         <!-- Admin Module Component -->
          <AdminModule class="rounded-lg p-4 sm:text-lg md:text-xl bg-black/40 shadow-lg text-white" content="Bejegyzések" />
          
          <!-- Dropdown for Kategória -->
          <select class="rounded-lg p-3 bg-black/40 shadow-lg text-center text-gray-400 sm:text-lg md:text-xl">
            <option value="" disabled selected>Válassz Kategóriát</option>
            <option value="category1">Kategória 1</option>
            <option value="category2">Kategória 2</option>
            <option value="category3">Kategória 3</option>
          </select>

          <!-- Dropdown for Szakma választás -->
          <select class="rounded-lg p-3 bg-black/40 shadow-lg text-center text-gray-400  sm:text-lg md:text-xl">
            <option value="" disabled selected>Válassz Szakmát</option>
            <option value="profession1">Szakma 1</option>
            <option value="profession2">Szakma 2</option>
            <option value="profession3">Szakma 3</option>
          </select>

          <!-- Dropdown for Évfolyam -->
          <select class="rounded-lg p-3 bg-black/40 shadow-lg text-center text-gray-400  sm:text-lg md:text-xl">
            <option value="" disabled selected>Válassz Évfolyamot</option>
            <option value="year1">Évfolyam 1</option>
            <option value="year2">Évfolyam 2</option>
            <option value="year3">Évfolyam 3</option>
          </select>

          <!-- Buttons -->
          <Button class="rounded-lg" label="Feltoltes" />
          <Button class="rounded-lg" label="Szerkesztes" @click="edit"/>
          <Button label="Mentés" />
          <Button label="Switch admin" icon="pi pi-cog" @click="toggleAdmin" />
        </div>
      </div>
    </div>
  </div>
</template>
