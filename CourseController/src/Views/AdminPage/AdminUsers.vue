<script setup lang="ts">
import BaseLayout from "../../Slots/AdminSlots/BaseLayout.vue";
import UserIcon from "../../Components/NavigationComponents/UserIcon.vue";
import AdminModule from "../../Components/AdminComponents/AdminModule.vue";
import AdminNavbar from "../../Components/AdminComponents/AdminNavbar.vue";

const props = defineProps({
  isAdmin: Boolean,
})
</script>
<template>

  <AdminNavbar :is-admin="isAdmin" />

  <div class="m-[2dvh_2dvw]">

  </div>

</template>
