<template>
    <div class="login-container">
      <h2>Bejelentkezés</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Email cím"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Jelszó:</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Jelszó"
            required
          />
        </div>
        <button type="submit">Bejelentkezés</button>
      </form>
      <button type="reset" @click="Check = 0;">Mégsem</button>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        console.log('Email:', this.email);
        console.log('Jelszó:', this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #36a372;
  }
  </style>