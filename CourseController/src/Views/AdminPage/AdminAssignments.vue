<script setup>



import AdminNavbar from "../../Components/AdminComponents/AdminNavbar.vue";

defineProps({
  isAdmin: Boolean,
})
</script>
<template>

      <AdminNavbar :is-admin="isAdmin" />

</template>
