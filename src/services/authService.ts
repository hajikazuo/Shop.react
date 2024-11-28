import { LoginResponse } from '../models/auth/LoginResponse';
import api from './apiService';
import { jwtDecode } from 'jwt-decode';

const AuthService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await api.post('/api/auth/login', { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token); 
      }
      return response.data; 
    } catch (error) {
      console.error('Login error:', error);
      throw error; 
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  },

  getUser: () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },

  getToken: () => {
    return localStorage.getItem('token');
  },
};

export default AuthService;
