<script setup>
import UserIcon from "./components/UserIcon.vue";

</script>

<template>
<!--  TODO remove circus ahh looking background colors (these are for debug visualisations) -->
  <div class="grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvh] bg-gradient-to-b from-red-400 to-orange-400">
    <div class="bg-green-500">
      <div id="rightCol"></div>
    </div>
    <main class="z-10 bg-yellow-500">
      <RouterView />
    </main>
    <div class="flex justify-end bg-violet-500">
      <div class="m-[2dvh_2dvw] h-fit ">
        <UserIcon />
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
