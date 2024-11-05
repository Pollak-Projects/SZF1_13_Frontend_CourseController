<script setup>

import {provide, ref} from "vue";
import AdminModules from "./admin/AdminModules.vue";
import AdminAssignments from "./admin/AdminAssignments.vue";
import AdminUsers from "./admin/AdminUsers.vue";
import BaseLayout from "../slots/BaseLayout.vue";
import {useRouter} from "vue-router";


const isAdmin = ref(false)

const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value
}

const router = useRouter()
function routeBack(){
  router.back()
}

</script>

<template>

  <BaseLayout>
    <template #left>
        <div class="m-[2dvh_2dvw]">
            <Button icon="pi pi-arrow-left" aria-label="Back" @click="routeBack" />
        </div>
    </template>
    <template #main>
      <router-view :is-admin="isAdmin" />
    </template>
    <template #right>
      <div class="flex flex-col gap-4 items-end">
        <UserIcon/>
        <Button label="Switch admin" icon="pi pi-cog" @click="toggleAdmin" />
      </div>
    </template>
  </BaseLayout>



</template>

<style scoped>

</style>
