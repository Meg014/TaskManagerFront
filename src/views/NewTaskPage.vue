<template>
    <!-- Navbar -->
    <div class="navbar">
        <div class="system-name">Sistema de Gerenciamento de Tarefas</div>
        <button @click="logout" class="user-button">
            <!-- Adicione o ícone de usuário aqui -->
            <span><i class="fas fa-sign-out-alt"></i> Sair</span>
        </button>
    </div>
<div class="row">
        <div class="card color">
            <div class="button-container">
                <a class="add-task-button" href="/tasks"><i class="fas fa-arrow-left"></i> Voltar</a>

            </div>

            <h2>Adicionar Nova Tarefa</h2>
            <form @submit.prevent="createTask">
                <div class="form-group">
                    <label for="title" class="form-label">Título:</label>
                    <input v-model="editedTask.title" type="text" id="title" class="form-input" required />
                </div>

                <div class="form-group">
                    <label for="description" class="form-label">Descrição:</label>
                    <textarea v-model="editedTask.description" id="description" class="form-textarea"></textarea>
                </div>

                <button type="submit" class="form-submit-button">Salvar</button>
            </form>
        </div>

    </div>


</template>
  
<script>
import taskService from '../services/taskService';

export default {
    data() {
        return {
            editedTask: {
                title: '',
                description: '',
            },
        };
    },
    methods: {
        async createTask() {
            try {
                await taskService.createTask(this.editedTask);
                // Após a operação bem-sucedida, redirecione para a página de tarefas
                this.$router.push('/tasks');
            } catch (error) {
                console.error('Erro ao criar a tarefa:', error);
            }
        },
    },
};
</script>
<style src="@/assets/styleNew.css" scoped></style>
