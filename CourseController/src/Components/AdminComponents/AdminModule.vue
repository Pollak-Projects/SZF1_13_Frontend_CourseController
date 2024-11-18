<script setup>
  defineProps({
    // Jo kerdes hogy itt miert kell type js-ben lol
    content: String
  })
  const model = defineModel('input')

</script>

<template>
<div>
  <link rel="stylesheet" href="style.css">
  <input type="select" v-model="model" :placeholder="content" style="width: 18vw;" class="bg-transparent text-center">
</div>
</template>

<style scoped>

</style>