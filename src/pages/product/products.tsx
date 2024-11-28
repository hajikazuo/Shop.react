// pages/products/ProductsPage.tsx
import React, { useEffect, useState } from 'react';
import productsService from '../../services/productsService';
import { Link } from 'react-router-dom';
import { ProductResponse } from '../../models/product/ProductResponse';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<ProductResponse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await productsService.getAllProducts();
                setProducts(result);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <Link to="/products/create">Create Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/products/edit/${product.productId}`}>Edit</Link>
                                <Link to={`/products/${product.productId}`}>Details</Link>
                                <Link to={`/products/delete/${product.productId}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsPage;
