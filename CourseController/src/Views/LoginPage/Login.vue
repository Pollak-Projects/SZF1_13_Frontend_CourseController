<template>
  <div class="containerr">
    <RouterLink to="/">
            <Button icon="pi pi-arrow-left" class="custom-button" aria-label="Back" />
          </RouterLink>
    <div class="login-box">
        <h2>Bejelentkezés</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="">
            <label>Felhasználónév</label>
          </div>
          <div class="line1"></div>
          <div class="user-box">
            <input type="password" name="" required="">
            <label>Jelszó</label>
          </div>
          <div class="line"></div>
          <a href="" class="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Belépés
          </a>
          <router-link to="/listing">
          <div class="folytdiv"><a class="folyt" >Folytatás bejelentkezés nélkül</a></div>
          </router-link>
        </form>
      </div>
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
  html {
    height: 100%;
  }
  .custom-button {
  font-size: 18px; 
  padding: 20px 20px; 
  width: auto; 
  height: 50px; 
  cursor: pointer;
}

  .containerr{
    height: 100vh;
  --_mesh-gradient-blur: 100px;
  --_mesh-gradient-blend-mode: normal;

  background: radial-gradient(at 0% 0%, #000000 0px, transparent 50%), 
  radial-gradient(at 3.5474581251836614% 25.18757982120051%, #000000 0px, transparent 50%), 
  radial-gradient(at 39.054951513370554% 97.9845146871009%, #435cb6 0px, transparent 50%), 
  radial-gradient(at 67.71672054069938% 98.11222860791827%, #768ad0 0px, transparent 50%), 
  radial-gradient(at 63.052600646488386% 42.55667305236271%, #a15cc1 0px, transparent 50%), 
  radial-gradient(at 26.191007934175726% 100%, #000000 0px, transparent 50%) #957641;
  mix-blend-mode: var(--_mesh-gradient-blend-mode);
  
}

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    padding: 40px;
    height: 390px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.336);
    box-sizing: border-box;
    box-shadow: 0 20px 25px 5px rgba(0, 0, 0, 0.726);
    border-radius: 23px;
  }
  
  .login-box h2 {
    margin: 8px 0 35px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 30px;
  }
  
  .login-box .user-box {
    position: relative;
  }
  
  .login-box .user-box input {
    width: 300px;
    padding: 10px 0;
    font-size: 16px;
    color: #ffffff;       
    margin-bottom: 30px;
    border: none;
    outline: none;
    background: transparent;
  }

  .line{
    width: 300px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #4949493a;
    outline: none;
    position: absolute;
    bottom: 116px;
    box-shadow: 0px 4px 20px 2px #000000;
  }

  .line1{
    width: 300px;      
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #4949493a;
    outline: none;
    position: absolute;
    bottom: 190px;
    box-shadow: 0px 4px 20px 2px #000000;
  }

  .login-box .user-box label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #ffffff8c;
    pointer-events: none;
    transition: .3s;
  }
  
  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #7575758a;
    font-size: 12px;
  }
  
  .login-box form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

  .login-box form .submit {
    position: relative;
    padding: 12px 28px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-decoration: none;
    transition: .5s;
    letter-spacing: 3px;
    font-weight: bolder;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.26);
    box-shadow: 0px 3px 10px 0px #000000bb;
    margin-bottom: 10px;
    display: inline-block;
    text-align: center;
    width: 140px;
  }
  
  .login-box form .submit:hover {
    width: 300px;
    background: white;
    color: black;
    border: 1px solid rgba(255, 255, 255, 0);
    box-shadow: 0 0 5px white,
                0 0 25px white,
                0 0 50px white,
                0 0 100px white;
  }
  
  .folytdiv {
    position: absolute;
    bottom: 25px; 
    left: 50%;
    transform: translateX(-50%); 
}

.folyt {
  text-decoration:underline;
    font-size: 13px;
    color: #fff;
    display: block;
    text-align: center; 
}

  </style>