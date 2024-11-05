<script>
export default {}
</script>

<style scoped>
.containerr{
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), radial-gradient(at 3.5474581251836614% 25.18757982120051%, #00000063 0px, transparent 50%), radial-gradient(at 39.054951513370554% 97.9845146871009%, #a928b4 0px, transparent 50%), radial-gradient(at 67.71672054069938% 98.11222860791827%, #b170ab 0px, transparent 50%), radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #806854c5;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
  
}
</style>

<template>
  <div class="grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvw] containerr">

    <header>
      <slot name="left"/>
    </header>
    <main>
      <div class="">
        <slot name="main"/>
      </div>
    </main>
    <footer>
      <div class="m-[2dvh_2dvw] h-fit flex justify-end">
        <slot name="right"/>
      </div>
    </footer>
  </div>
</template>
