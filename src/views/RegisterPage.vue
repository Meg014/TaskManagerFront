
<template>
      <!-- Navbar -->
      <div class="navbar">
        <div class="system-name">Sistema de Gerenciamento de Tarefas</div>
        <button @click="logout" class="user-button">
            <!-- Adicione o ícone de usuário aqui -->
            <span><i class="fas fa-sign-out-alt"></i> Sair</span>
        </button>
    </div>
  <div>
    <div class="container">
      <div class="img">
        <img :src="require('@/assets/bg.svg')" alt="Background Image">
      </div>
      <div class="login-content">
        <h1 class="title" style="color: #d96438;">Criar Conta</h1>
        <!-- Adicione o Flash aqui -->
        <br />
        <form @submit.prevent="register">
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Nome</h5>
              <input v-model="name" type="text" required class="input">
            </div>
          </div>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <h5>Email</h5>
              <input v-model="email" type="email" required class="input">
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input v-model="password" type="password" required class="input">
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Confirma Password</h5>
              <input v-model="password_confirmation" type="password" required class="input">
            </div>
          </div>

          <a href="/login">Fazer login?</a>
          <button type="submit"  class="btn">Registrar</button>

        </form>
      </div>
    </div>
  </div>
</template>


  
  <script>
  import authService from '../services/authService';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      };
    },
    methods: {
      register() {
        authService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(response => {
          console.log('User created successfully:', response.data.message);
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Registration failed:', error);
          // Lógica para exibir mensagem de erro
        });
      },
    },
  };
  </script>
  <style src="@/assets/styleRegister.css" scoped></style>
