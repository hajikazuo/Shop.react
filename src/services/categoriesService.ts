import { CategoryRequest } from '../models/category/CategoriaRequest';
import { CategoryResponse } from '../models/category/CategoryResponse';
import api from './apiService';

const categoriesService = {
    getCategories: async (): Promise<CategoryResponse[]> => {
        try {
            const response = await api.get('api/categories');
            return response.data;
        } catch (error) {
            console.error('Erro ao obter as categorias:', error);
            throw error; 
        }
    },

    getCategoryById: async (id: string): Promise<CategoryResponse> => {
        try {
            const response = await api.get(`api/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao obter a categoria com ID ${id}:`, error);
            throw error;
        }
    },

    createCategory: async (category: CategoryRequest): Promise<CategoryResponse> => {
        try {
            const response = await api.post('api/categories', category);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar a categoria:', error);
            throw error;
        }
    },

    updateCategory: async (id: string, category: CategoryRequest): Promise<CategoryResponse> => {
        try {
            const response = await api.put(`api/categories/${id}`, category);
            return response.data;
        } catch (error) {
            console.error(`Erro ao atualizar a categoria com ID ${id}:`, error);
            throw error;
        }
    },

    deleteCategory: async (id: string): Promise<CategoryResponse> => {
        try {
            const response = await api.delete(`api/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao deletar a categoria com ID ${id}:`, error);
            throw error;
        }
    }
};

export default categoriesService;
