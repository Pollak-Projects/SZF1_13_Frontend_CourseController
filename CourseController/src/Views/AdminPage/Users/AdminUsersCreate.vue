
<link rel="stylesheet" href="style.css"/>

<script setup>

import AdminNavbar from "../../../Components/AdminComponents/AdminNavbar.vue";

import {reactive} from "vue";

let formData = reactive({
  username: null,
  email: null,
  hashedPwd: null,
  displayName: null,
  birthDate:null
});

const createUser = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(formData)
  console.log(await response.json());
}

</script>

<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar />
    <div class="flex flex-col items-center justify-center shadow bg-[#00000042] py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <div class="flex flex-col gap-[3vh] sm:gap-[4vh] md:gap-[5vh] mb-[5vh]">
        <p class="place-self-center text-lg sm:text-xl md:text-4xl">Felhasználó Létrehozás</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[3vh] gap-x-[3vw]">

          <!-- Admin Module Component -->
          <AdminModule v-model:input="formData.username" style="height: 60px;" class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white" content="username" />
          <AdminModule v-model:input="formData.displayName" style="height: 60px;" class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white" content="displayedName" />
          <AdminModule v-model:input="formData.hashedPwd" style="height: 60px;" class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white" content="password" />
          <AdminModule v-model:input="formData.email" style="height: 60px;" class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white" content="email" />
          <input type="date" v-model="formData.birthDate">

          <Button label="Létrehozás" @click="createUser"/>
        </div>
      </div>
    </div>
  </div>
</template>
