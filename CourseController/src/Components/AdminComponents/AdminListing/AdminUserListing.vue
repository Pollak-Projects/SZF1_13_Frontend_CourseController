<script setup>
import {computed, onMounted, ref} from 'vue';

const users = ref([]);
const searchQuery = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user =>
      user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const getUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/user`);
  users.value  = await response.json();
  // users.value = [
  //   { id: 1, username: 'Geza1', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza2', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza3', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza4', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza5', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza6', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza7', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza8', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza9', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  //   { id: 1, username: 'Geza10', displayName: 'almavagyok', email: 'janipatrik138@gmail.com', createdAt: '2024.06.25 12:00:00' },
  // ];
};

const deleteUser = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/user/${id}`, {
    method: 'DELETE',
  });
  console.log(await response.json());
};

const editUser = (id) => {
  // Implement edit logic here
};

onMounted(async () => {
  try {
    await getUsers();
  } catch (error) {
    console.log("Hiba a betöltés során!", error);
  }
});
</script>

<template>
  <div class="content-body">
    <h2 class="form-title">Felhasználók</h2>
    <div v-if="users.length <= 0">
      <h1 class="form-title">Nincsenek elérhető felhasználók</h1>
    </div>
    <div v-if="users.length > 0" class="search-container">
      <input v-model="searchQuery" type="text" placeholder="Keresés" class="search-input" />
    </div>
    <div v-if="users.length > 0" class="table-container">
      <table class="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Displayed Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>Operation</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.displayName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.createdAt }}</td>
            <td>
              <button @click="editUser(user.id)" class="delete-button">
                Edit
              </button>
            </td>
            <td>
              <button @click="deleteUser(user.id)" class="delete-button">
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