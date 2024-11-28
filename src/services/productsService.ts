import { ProductResponse } from '../models/product/ProductResponse';
import { ProductRequest } from '../models/product/ProductRequest';
import api from './apiService';


const productService = {
    getAllProducts: async (): Promise<ProductResponse[]> => {
        try {
            const response = await api.get('api/products');
            return response.data; 
        } catch (error) {
            console.error('Erro ao obter os produtos:', error);
            throw error;
        }
    },

    getProductById: async (id: string): Promise<ProductResponse> => {
        try {
            const response = await api.get(`api/products/${id}`);
            return response.data; 
        } catch (error) {
            console.error(`Erro ao obter o produto com ID ${id}:`, error);
            throw error;
        }
    },

    createProduct: async (product: ProductRequest): Promise<ProductResponse> => {
        try {
            const response = await api.post('api/products', product);
            return response.data; 
        } catch (error) {
            console.error('Erro ao criar o produto:', error);
            throw error;
        }
    },

    updateProduct: async (id: string, product: ProductRequest): Promise<ProductResponse> => {
        try {
            const response = await api.put(`api/products/${id}`, product);
            return response.data; 
        } catch (error) {
            console.error(`Erro ao atualizar o produto com ID ${id}:`, error);
            throw error;
        }
    },

    deleteProduct: async (id: string): Promise<ProductResponse> => {
        try {
            const response = await api.delete(`api/products/${id}`);
            return response.data; 
        } catch (error) {
            console.error(`Erro ao deletar o produto com ID ${id}:`, error);
            throw error;
        }
    },
};

export default productService;
