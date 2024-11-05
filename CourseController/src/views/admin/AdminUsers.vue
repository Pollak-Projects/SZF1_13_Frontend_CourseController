<script setup lang="ts">
import BaseLayout from "../../slots/BaseLayout.vue";
import UserIcon from "../../components/UserIcon.vue";
import AdminModule from "../../components/AdminModule.vue";
import AdminNavbar from "../../components/AdminNavbar.vue";

const props = defineProps({
  isAdmin: Boolean,
})
</script>
<template>

  <AdminNavbar :is-admin="isAdmin" />

  <div class="m-[2dvh_2dvw]">

  </div>

</template>
