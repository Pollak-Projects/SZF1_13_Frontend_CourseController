<script setup>
import UserIcon from "./components/UserIcon.vue";
</script>

<template>
<!--  This background isn't in the design its just a placeholder for now -->
  <div class="grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvw] bg-gradient-to-b from-red-400 to-orange-400">
    <div class="">
      <div id="rightCol"></div>
    </div>
    <main class="z-10">
      <RouterView />
    </main>
    <div class="flex justify-end ">
      <div class="m-[2dvh_2dvw] h-fit ">
        <UserIcon />
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
