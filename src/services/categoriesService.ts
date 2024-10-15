import { Category } from '../models/category/Category';
import api from './apiService';

const categoriesService = {
    getCategories: async () => {
        const response = await api.get('api/categories');
        return response.data;
    },

    createCategory: async (category: Omit<Category, 'categoryId'>) => {
        const response = await api.post('api/categories', category);
        return response.data;
    }
};

export default categoriesService;