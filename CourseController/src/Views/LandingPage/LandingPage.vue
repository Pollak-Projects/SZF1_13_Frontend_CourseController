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
        <router-link to="admin/modules-create"  class="text-white">Admin</router-link>
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
    font-size: 17vh;
    font-family: Verdana;
    margin: 0;
    line-height: 1;
    transition: 0.3s;
}

@media (max-width: 1000px) {
    h1{
      font-size: 12vh;
  }
}

@media (max-width: 710px) {
    h1{
      font-size: 8vh;
  }
}

@media (max-width: 430px) {
    h1{
      font-size: 5vh;
  }
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
.containerr{
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;


</style>