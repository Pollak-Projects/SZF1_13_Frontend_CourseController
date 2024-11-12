<script setup>

import {inject, ref} from "vue";

const isAdmin = inject("isAdmin")

const showModulesDropdown = ref(false);
const showAssignmentsDropdown = ref(false);
const showUsersDropdown = ref(false);
</script>

<template>

    <div class="flex py-[1.5dvh] bg-[#00000042] shadow sm:text-xl md:text-1xl rounded-b-3xl justify-evenly">
      <!-- Modules Dropdown -->
      <div
          class="relative group"
          @mouseenter="showModulesDropdown = true"
          @mouseleave="showModulesDropdown = false"
      >
        <RouterLink to="/admin/modules" class="px-4 py-2 hover:bg-purple-800 rounded">Modulok
          <i v-if="showModulesDropdown"  class="pi pi-angle-up text-base"/>
          <i v-else class="pi pi-angle-down text-base"/>
        </RouterLink>
        <div
            v-if="showModulesDropdown"
            class="absolute top-full left-0 mt-1 w-32 bg-white text-gray-800 shadow-lg rounded-lg"
        >
          <RouterLink to="/admin/modules/create" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">Create</RouterLink>
          <RouterLink to="/admin/modules/list" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">List</RouterLink>
        </div>
      </div>

      <!-- Assignments Dropdown -->
      <div
          class="relative group"
          @mouseenter="showAssignmentsDropdown = true"
          @mouseleave="showAssignmentsDropdown = false"
      >
        <RouterLink to="/admin/assignments" class="px-4 py-2 hover:bg-purple-800 rounded">Feladatok
          <i v-if="showAssignmentsDropdown" class="pi pi-angle-up text-base"/>
          <i v-else class="pi pi-angle-down text-base"/>
        </RouterLink>
        <div
            v-if="showAssignmentsDropdown"
            class="absolute top-full left-0 mt-1 w-32 bg-white text-gray-800 shadow-lg rounded-lg"
        >
          <RouterLink to="/admin/assignments/create" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">Create</RouterLink>
          <RouterLink to="/admin/assignments/list" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">List</RouterLink>
        </div>
      </div>

      <!-- Users Dropdown (only if isAdmin is true) -->
      <div
          v-if="isAdmin"
          class="relative group"
          @mouseenter="showUsersDropdown = true"
          @mouseleave="showUsersDropdown = false"
      >
        <RouterLink to="/admin/users" class="px-4 py-2 hover:bg-purple-800 rounded">Felhasználók
          <i v-if="showUsersDropdown" class="pi pi-angle-up text-base"/>
          <i v-else class="pi pi-angle-down text-base"/>
        </RouterLink>
        <div
            v-if="showUsersDropdown"
            class="absolute top-full left-0 mt-1 w-32 bg-white text-gray-800 shadow-lg rounded-lg"
        >
          <RouterLink to="/admin/users/create" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">Create</RouterLink>
          <RouterLink to="/admin/users/list" class="block px-4 py-2 hover:text-gray-100 hover:bg-purple-600">List</RouterLink>
        </div>
      </div>
    </div>



</template>

<style scoped>

</style>