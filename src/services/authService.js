import apiService from './apiService';

const authService = {
  register: (userData) => apiService.post('/auth/register', userData),
  login: (credentials) => apiService.post('/auth/login', credentials),
  logout: () => {
    const token = localStorage.getItem('access_token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    return apiService.post('/auth/logout', null, config);
  },
};

export default authService;
