<script setup>

import AdminNavbar from "../../../Components/AdminComponents/AdminNavbar.vue";
import AdminUserListing from "../../../Components/AdminComponents/AdminListing/AdminUserListing.vue";

</script>

<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar />
    <div class="flex flex-col items-center justify-center shadow bg-[#00000042] py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <section class="w-full min-h-[30dvh] border border-gray-600 rounded-lg">

        <AdminUserListing/>

      </section>
    </div>
  </div>

</template>