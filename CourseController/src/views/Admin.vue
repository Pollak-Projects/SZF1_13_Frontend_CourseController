<script setup>

import {provide, ref} from "vue";
import BaseLayout from "../slots/BaseLayout.vue";

const isAdmin = ref(false)

provide('isAdmin', isAdmin)

const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value
}

</script>

<template>

  <BaseLayout>
    <template #left>
        <div class="m-[2dvh_2dvw]">
          <RouterLink to="/">
            <Button icon="pi pi-arrow-left" aria-label="Back" />
          </RouterLink>
        </div>
    </template>
    <template #main>
      <router-view/>

    </template>
    <template #right>
      <UserIcon/>
    </template>
  </BaseLayout>



</template>

<style scoped>

</style>