<script setup lang="ts">


import AdminNavbar from "../../../Components/AdminComponents/AdminNavbar.vue";

const idk = {
  id:"idk",
  value:[
    {name: "idk", icon1: "icon1", icon2: "icon2"},
    {name: "whatever", icon1: "icon1", icon2: "icon2"},
    {name: "this is such a long ass dummy question that it will surely require two lines od space to adequately display it on the listing form, otherwise it will look really stupid like your mother",
      icon1: "icon1", icon2: "icon2"},
    {name: "whatever version 2", icon1: "icon1", icon2: "icon2"},
    {name: "seriously, whatever version 3", icon1: "icon1", icon2: "icon2"},
  ]
}

idk.value[idk.value.length] = {
  name:"Új bejegyzés"
}

</script>

<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar />
    <div class="flex flex-col items-center justify-center shadow bg-[#00000042] py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <section class="w-full min-h-[30dvh] border border-gray-600 rounded-lg">
        <div class="flex justify-center items-center">
          <span class="text-2xl font-bold">Felhasználók</span>
        </div>

        <!-- dynamically generating each element from an array of objects -->

        <section
            v-for="(items, index) in idk.value"
            :key="idk.id"
            class="flex flex-row gap-1 my-0.5">
          <div v-if="index != idk.value.length - 1"
               class="flex w-full h-fit bg-gray-600 bg-opacity-40 pr-4 pl-10">

        <span class="flex-grow mr-20">
          {{items.name}}
        </span>

            <div class="flex gap-2 ml-auto">
              <button>
                {{items.icon1}}
              </button>
              <button>
                {{items.icon2}}
              </button>
            </div>

          </div>

          <!-- last item of list will be the new item button -->

          <div v-else
               class="w-full flex justify-center items-center bg-gray-600 bg-opacity-40">
            <button>Új bejegyzés</button>
          </div>
        </section>
      </section>
    </div>
  </div>


</template>