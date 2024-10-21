<script setup>
  defineProps({
    // Jo kerdes hogy itt miert kell type js-ben lol
    content: String
  })
</script>

<template>
<div>
  <input type="text" :placeholder="content" class="p-[2dvh_5dvw] shadow-figmaxl text-center rounded-3xl">
</div>
</template>

<style scoped>

</style>