<script setup>

</script>

<template>
<div class="containerr grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvw]">
    <div id="leftSide" class="fixed-top-right text-xl">
        <ul class=" flex space-x-4">
      <li>
        <RouterLink to="list" class="text-white underline">Megtekintés</RouterLink>
      </li>
      <li>
        <router-link to="login" class="text-white underline">Bejelentkezés</router-link>
      </li>
      <li>
        <router-link to="admin" class="text-white underline">Admin</router-link>
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
.containerr{
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #957641;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
  
}
</style>