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
                <a class="add-task-button" href="/"><i class="fas fa-arrow-left"></i> Voltar</a>
                <router-link to="/add-task" class="add-task-button">
                    <i class="fas fa-plus"></i> Nova Tarefa
                </router-link>
            </div>

            <h2>Suas Tarefas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <task-item v-for="task in tasks" :key="task.id" :task="task" @edit-task="confirmEditTask"
                        @delete-task="confirmDeleteTask" />
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
import taskService from '../services/taskService';

export default {
    components: {
        TaskItem,
    },
    data() {
        return {
            tasks: [],
            taskToEdit: null,
            taskToDelete: null,
        };
    },
    created() {
        this.loadTasks();
    },
    methods: {
        async loadTasks() {
            try {
                const response = await taskService.getAllTasks();
                this.tasks = response.data.tasks;
            } catch (error) {
                console.error('Erro ao carregar tarefas:', error);
            }
        },

        confirmEditTask(task) {
            this.taskToEdit = task;
            this.$router.push(`/edit-task/${task.id}`);
        },

        confirmDeleteTask(task) {
            // Armazena temporariamente a tarefa a ser excluída
            this.taskToDelete = task;
            if (window.confirm(`Deseja realmente excluir a tarefa: ${task.title}?`)) {
                this.deleteTask(); // Confirma a exclusão
            } else {
                // Caso o usuário cancele, limpa a tarefa a ser excluída
                this.taskToDelete = null;
            }
        },
        async deleteTask() {
            try {
                if (this.taskToDelete) {
                    await taskService.deleteTask(this.taskToDelete.id);
                    this.loadTasks();
                    console.log('Tarefa excluída com sucesso:', this.taskToDelete);
                }
            } catch (error) {
                console.error('Erro ao excluir tarefa:', error);
            } finally {
                this.taskToDelete = null;
            }
        },
    },
};
</script>
<style src="@/assets/styleTaskPage.css" scoped></style>
