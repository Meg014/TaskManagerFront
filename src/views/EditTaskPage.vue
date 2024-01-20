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

            <h2>Editar Tarefa</h2>
            <form @submit.prevent="saveTask">
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
                id: null,
                title: '',
                description: '',
            },
            isEditing: false,
        };
    },
    created() {
        this.loadTaskDetails();
    },
    methods: {
        async loadTaskDetails() {
            try {
                const taskId = this.$route.params.taskId;
                console.log('Task ID:', taskId);

                if (taskId) {
                    const response = await taskService.getTaskById(taskId);
                    console.log('Task Details:', response.data.task);

                    this.editedTask = response.data.task;
                    this.editedTask.id = response.data.task.id;
                    this.isEditing = true;
                }
            } catch (error) {
                console.error('Error loading task details:', error);
            }
        },

        async saveTask() {
            try {
                if (this.isEditing && this.editedTask.id !== null) {
                    console.log('Dados para atualização:', this.editedTask);
                    await taskService.updateTask(this.editedTask.id, this.editedTask);
                    this.$router.push('/tasks');
                }
            } catch (error) {
                console.error('Erro ao salvar a tarefa:', error);
            }
        }
    },
};
</script>
<style src="@/assets/styleEdit.css" scoped></style>
