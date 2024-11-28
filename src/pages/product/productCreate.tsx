import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productsService from '../../services/productsService';
import categoriesService from '../../services/categoriesService';
import { ProductRequest } from '../../models/product/ProductRequest';
import { CategoryResponse } from '../../models/category/CategoryResponse';

const CreateProduct: React.FC = () => {
    const [product, setProduct] = useState<ProductRequest>({
        name: '',
        price: 0,
        description: '',
        stock: 0,
        imageURL: '',
        categoryId: ''
    });
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await categoriesService.getCategories();
                setCategories(categoryData);
            } catch (err) {
                setError('Error loading categories.');
                console.error(err);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await productsService.createProduct(product);
            navigate('/products');
        } catch (err) {
            setError('Error creating product.');
            console.error(err);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="imageURL">Image URL:</label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        value={product.imageURL}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="categoryId">Category:</label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        value={product.categoryId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.categoryId} value={category.categoryId}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;
