
<link rel="stylesheet" href="style.css"/>

<script setup>

import AdminNavbar from "../../../Components/AdminComponents/AdminNavbar.vue";
import {useToast} from "primevue/usetoast";

const toast = useToast();
const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>

<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar />
    <div class="flex flex-col items-center justify-center shadow bg-[#00000042] py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <div class="flex flex-col gap-[3vh] sm:gap-[4vh] md:gap-[5vh] mb-[5vh]">
        <p class="place-self-center text-lg sm:text-xl md:text-4xl">Feladat Létrehozás</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[3vh] gap-x-[3vw]">

          <!-- Admin Module Component -->
          <AdminModule style="height: 60px;" class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white" content="Bejegyzések" />

          <select style="height: 60px;" class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400 sm:text-lg md:text-xl">
            <option value="" disabled selected>Kategória</option>
            <option value="category1">Kategória 1</option>
            <option value="category2">Kategória 2</option>
            <option value="category3">Kategória 3</option>
          </select>
          <select style="height: 60px;" class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400  sm:text-lg md:text-xl">
            <option value="" disabled selected>Szakma</option>
            <option value="profession1">Szakma 1</option>
            <option value="profession2">Szakma 2</option>
            <option value="profession3">Szakma 3</option>
          </select>
          <select style="height: 60px;" class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400  sm:text-lg md:text-xl">
            <option value="" disabled selected>Évfolyam</option>
            <option value="year1">Évfolyam 1</option>
            <option value="year2">Évfolyam 2</option>
            <option value="year3">Évfolyam 3</option>
          </select>
<!--          <Button class="rounded-lg" label="Feltoltes" />-->
          <Toast />
          <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="text/markdown" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
          <Button class="rounded-lg" label="Szerkesztes"/>
          <Button label="Mentés" />
        </div>
      </div>
    </div>
  </div>
</template>
