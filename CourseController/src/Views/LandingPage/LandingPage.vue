<script setup>
import ThemeSwitcher from '../../Components/ViewComponents/ThemeSwitcher.vue';
</script>

<template>
<ThemeSwitcher/>
<div class="containerr grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvw]">
    <div id="leftSide" class="fixed-top-right text-xl">
        <ul class=" flex space-x-4">
      <li>
        <RouterLink to="listing" class="text-white">Megtekintés</RouterLink>
      </li>
      <li>
        <router-link to="login" class="text-white">Bejelentkezés</router-link>
      </li>
      <li>
        <router-link to="admin" class="text-white">Admin</router-link>
      </li>
    </ul>
    </div>

    <div class="flex justify-end " id="rightSide">
        <div class="fixed-bottom-left font-semibold">
      <h1>Pollák</h1>
      <h1>Classroom</h1>
    </div>
    </div>
</div>
</template>

<style scoped>

.fixed-bottom-left {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 3%;
}
h1{
    font-size: 20vh;
    font-family: Verdana;
    margin: 0;
    line-height: 1;
}
.fixed-top-right {
  position: fixed;
  top: 0;
  right: 0;
  margin: 2%;
  margin-right: 3%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline;
}

.router-link {
  text-decoration: underline;
}


</style>