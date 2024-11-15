<script setup>
import AdminNavbar from "../../../Components/AdminComponents/AdminNavbar.vue";
import { useToast } from "primevue/usetoast";
import { provide, ref, reactive, onMounted } from "vue";

let formData = reactive({
  selectedCategory: null,
  selectedProfession: null,
  selectedGrade: null,
  moduleName: null,
  moduleDescription: null,
  moduleMarkdownFile: null
});

let categories = ref([]);
let professions = ref([]);
let grades = ref([]);

const getProfessions = async () => {
  professions.value = [
    { id: 1, professionName: "Profession 1" },
    { id: 2, professionName: "Profession 2" },
    { id: 3, professionName: "Profession 3" },
    { id: 4, professionName: "Profession 4" },
  ];
};

const getCategories = async () => {
  categories.value = [
    { id: 1, categoryName: "Category 1" },
    { id: 2, categoryName: "Category 2" },
    { id: 3, categoryName: "Category 3" },
    { id: 4, categoryName: "Category 4" },
  ];
};

const getGrades = async () => {
  grades.value = [
    { id: 1, grade: "Grade 1" },
    { id: 2, grade: "Grade 2" },
    { id: 3, grade: "Grade 3" },
    { id: 4, grade: "Grade 4" },
  ];
};

const logger = () => {
  console.log(formData.selectedCategory);
  console.log(formData.selectedProfession);
  console.log(formData.selectedGrade)
  console.log(formData.moduleName)
  console.log(formData.moduleDescription)
  console.log(formData.moduleMarkdownFile)
}

const modulesFile = ref(null);

provide("modulesFile", modulesFile);

const toast = useToast();
const onUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

const onFileSelect = (e) => {
  modulesFile.value = e.files[0];
  toast.add({
    severity: "info",
    summary: "File Selected",
    detail: e.files[0].name,
    life: 2000,
  });
};

onMounted(() => {
  getCategories();
  getProfessions();
  getGrades();
});
</script>


<template>
  <div class="flex flex-col gap-[10vh] sm:gap-[15vh] md:gap-[20vh]">
    <AdminNavbar />
    <div
      class="flex flex-col items-center justify-center shadow bg-[#00000042] py-[3vh] sm:py-[4vh] md:py-[5vh] rounded-3xl">
      <div class="flex flex-col gap-[3vh] sm:gap-[4vh] md:gap-[5vh] mb-[5vh]">
        <p class="place-self-center text-lg sm:text-xl md:text-4xl">Modul Létrehozás</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-[3vh] gap-x-[3vw]">

          <AdminModule style="height: 60px;"
            class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white"
            content="Modul neve" />

          <AdminModule style="height: 60px;"
            class="rounded-lg p-4 sm:text-lg md:text-xl shadow-xl shadow-black/50 bg-black/40 text-white"
            content="Modul leirasa" />

          <select 
            v-model="formData.selectedCategory"
            @change="logger"
            style="height: 60px;"
            class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400 sm:text-lg md:text-xl">
            <option v-for="category in categories" :key="category.id" :value="category.id" class="input-select">
              {{ category.categoryName }}
            </option>
          </select>
          <select 
            v-model="formData.selectedProfession"
            @change="logger"
            style="height: 60px;"
            class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400  sm:text-lg md:text-xl">
            <option v-for="profession in professions" :key="profession.id" :value="profession.id" class="input-select">
              {{ profession.professionName }}
            </option>
          </select>
          <select 
            v-model="formData.selectedGrade"
            @change="logger"
            style="height: 60px;"
            class="rounded-lg p-3 shadow-xl shadow-black/50 bg-black/40 text-center text-gray-400  sm:text-lg md:text-xl">
            <option v-for="grade in grades" :key="grade.id" :value="grade.id" class="input-select">
              {{ grade.grade }}
            </option>
          </select>
          <FileUpload mode="basic" name="modules[]" @select="onFileSelect" customUpload :maxFileSize="1000000"
            @upload="onUpload" :auto="true" chooseLabel="Feltoltes" class="w-full" />
          <Button class="rounded-lg" label="Szerkesztes" />
          <Button label="Mentés" />
        </div>
      </div>
    </div>
  </div>
</template>
