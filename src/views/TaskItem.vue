<template>
    <tr>
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td>
        <button class="btn-edit" @click="editTask"><i class="fas fa-edit"></i></button>
        <button class="btn-ex" @click="deleteTask"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editTask() {
        this.$emit('edit-task', this.task);
      },
      deleteTask() {
        this.$emit('delete-task', this.task);
      },
    },
  };
  </script>
  <style src="@/assets/styleTaskPage.css" scoped></style>
