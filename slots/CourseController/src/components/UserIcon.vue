<script setup>
import {ref} from "vue";

const menu = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const items = ref([
  {
    // label: 'Navigate',
    items: [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/',
      },
      {
        label: 'Admin',
        icon: 'pi pi-cog',
        route: '/admin',
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        route: '/',
      },
    ]
  }
]);
</script>

<template>
  <Button icon="pi pi-user" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
  <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </RouterLink>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<style scoped>

</style>