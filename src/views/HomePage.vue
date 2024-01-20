
<template>
  <div>
    <!-- Navbar -->
    <div class="navbar">
      <div class="system-name">Sistema de Gerenciamento de Tarefas</div>
      <button @click="logout" class="user-button">
        <!-- Adicione o ícone de usuário aqui -->
        <span><i class="fas fa-sign-out-alt"></i> Sair</span>
      </button>
    </div>

    <!-- Conteúdo principal -->

    <div class="row">
    
      <div class="card color">
        <h2>Bem-Vindo</h2>
        <p>Acesse suas tarefas</p>
        <button class="btn" @click="openTasks">Abrir Tarefas</button>
      </div>
 
    </div>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  methods: {
    logout() {
      // O seu código de logout permanece inalterado
      authService.logout()
        .then(response => {
          console.log('Logout successful:', response.data.message);
          localStorage.removeItem('access_token');
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Logout failed:', error);
          // Lógica para exibir mensagem de erro
        });
    },
    openTasks() {
      this.$router.push(`/tasks`);

    },
  },
};
</script>
  
  <style src="@/assets/styleHome.css" scoped></style>
