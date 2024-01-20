<template>
  <div>
    <div class="container">
      <div class="img">
        <img :src="require('@/assets/bg.svg')" alt="Background Image">
      </div>
      <div class="login-content">
        <h1 class="title" style="color: #d96438;">Task Manager</h1>
        <!-- Adicione o Flash aqui -->
        <br />
        <form @submit.prevent="login">
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
          <a href="/register">Criar conta?</a>
          <button type="submit" class="btn">Login</button>
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
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      authService.login({ email: this.email, password: this.password })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token);
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Login failed:', error);
          // Lógica para exibir mensagem de erro
        });
    },
  },
};
</script>
  
<style src="@/assets/styleLogin.css" scoped></style>
