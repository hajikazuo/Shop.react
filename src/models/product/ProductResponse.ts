import { CategoryResponse } from "../category/CategoryResponse";

export interface ProductResponse {
    productId: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    imageURL: string;
    categoryId: string;
    category: CategoryResponse;
}
