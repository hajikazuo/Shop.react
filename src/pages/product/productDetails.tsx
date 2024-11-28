// pages/products/ProductDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsService from '../../services/productsService';
import { ProductResponse } from '../../models/product/ProductResponse';

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductResponse | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (id) {
                    const productData = await productsService.getProductById(id);
                    setProduct(productData);
                }
            } catch (err) {
                setError('Error loading product.');
                console.error(err);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            <h2>Product Details</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {product ? (
                <div>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>Image URL:</strong> {product.imageURL}</p>
                    <p><strong>Category:</strong> {product.categoryId}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetails;
