<script setup>



import AdminNavbar from "../../components/AdminNavbar.vue";

const props = defineProps({
  isAdmin: Boolean,
})
</script>
<template>

      <AdminNavbar :is-admin="isAdmin" />

</template>
