<script setup>
import {computed, onMounted, ref} from 'vue';

const assignments = ref([]);
const searchQuery = ref('');
const deletedWords = ref([]);

const filteredAssignments = computed(() => {
  return assignments.value.filter(assignment =>
      assignment.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const getAssignments = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/assignment`);
  assignments.value  = await response.json();
  // assignments.value = [
  //   { id: 1, name: 'Express alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'Java alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'C# alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'HTML alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'CSS alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'PHP alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  //   { id: 1, name: 'Random alapok', description: 'almavagyok', grade: '13', createdAt: '2024.06.25 12:00:00', categoryName: 'Backend', professionName: 'Szoftverfejleszto' },
  // ];
};

const deleteAssignment = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/assignment`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  console.log(await response.json());
};

const editAssignment = (id) => {
  // Implement edit logic here
};

onMounted(async () => {
  try {
    await getAssignments();
  } catch (error) {
    console.log("Hiba a betöltés során!", error);
  }
});

</script>

<template>
  <div class="content-body">
    <h2 class="form-title">Feladatok</h2>
    <div v-if="assignments.length <= 0">
      <h1 class="form-title">Nincsenek elérhető feladatok</h1>
    </div>
    <div v-if="assignments.length > 0" class="search-container">
      <input v-model="searchQuery" type="text" placeholder="Keresés" class="search-input" />
    </div>
    <div v-if="assignments.length > 0" class="table-container">
      <table class="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Description</th>
            <th>Category</th>
            <th>Profession</th>
            <th>CreatedAt</th>
            <th>Operation</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(assignment, index) in filteredAssignments" :key="index">
            <td>{{ assignment.id }}</td>
            <td>{{ assignment.name }}</td>
            <td>{{ assignment.grade }}</td>
            <td>{{ assignment.description }}</td>
            <td>{{ assignment.categoryName }}</td>
            <td>{{ assignment.professionName }}</td>
            <td>{{ assignment.createdAt }}</td>
            <td>
              <button @click="editAssignment(assignment.id)" class="delete-button">
                Edit
              </button>
            </td>
            <td>
              <button @click="deleteAssignment(assignment.id)" class="delete-button">
                Törlés
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.content-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin: auto;
}

.form-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.search-input {
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #49d0ce;
  background-color: transparent;
  color: white;
  outline: none;
}

.search-input::placeholder {
  text-align: center;
}

.search-input:hover,
.search-input:focus {
  border-color: #b9ebe9;
}

.table-container {
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
  border: #49d0ce solid 2px;
}

.table-container::-webkit-scrollbar {
  width: 8px;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #49d0ce;
  border-radius: 2px;
}

.table-container::-webkit-scrollbar-track {
  background-color: transparent;
}

.table-container::-webkit-scrollbar-corner {
  background-color: #49d0ce;
}

.category-table {
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-table th,
.category-table td {
  padding: 12px;
  font-size: 14px;
  color: white;
}

.category-table thead th {
  position: sticky;
  top: 0;
  background-color: #3f3f3f7f;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 1;
}

.category-table tbody tr:hover {
  background-color: #71717150;
}

.delete-button {
  background-color: #49d0ce;
  color: black;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #56b6b1;
}
</style>