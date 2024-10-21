<script>
export default {}
</script>
<template>
  <div class="grid grid-cols-[25dvw_50dvw_25dvw] grid-rows-none gap-0 h-[100dvh] w-[100dvw] bg-gradient-to-b from-red-400 to-orange-400">

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
