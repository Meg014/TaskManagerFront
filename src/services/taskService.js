import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default {
  getAllTasks() {
    return apiClient.get('/auth/tasks');
  },
  getTaskById(taskId) {
    return apiClient.put(`/auth/tasks/${taskId}`);
},
  deleteTask(taskId) {
    return apiClient.delete(`/auth/tasks/${taskId}`);
  },
  updateTask(taskId, taskData) {
    return apiClient.put(`/auth/tasks/${taskId}`, taskData);
},
  createTask(taskData) {
    return apiClient.post('/auth/tasks', taskData);
  },
  
};
