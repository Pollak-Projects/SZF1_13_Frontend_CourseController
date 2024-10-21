<script setup>

import BaseLayout from "../../slots/BaseLayout.vue";
import UserIcon from "../../components/UserIcon.vue";

</script>
<template>
  <BaseLayout>
    <template #left>
      <Teleport to="#rightCol">
        <div class="m-[2dvh_2dvw]">
          <RouterLink to="/admin">
            <Button icon="pi pi-arrow-left" aria-label="Back" />
          </RouterLink>
        </div>
      </Teleport>
    </template>
    <template #main></template>
    <template #right>
      <UserIcon/>
    </template>
  </BaseLayout>
</template>