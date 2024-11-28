import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsService from '../../services/productsService';

const DeleteProduct: React.FC = () => {
    const { id } = useParams(); 
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (!id) return;

        try {
            await productsService.deleteProduct(id);
            navigate('/products');
        } catch (err) {
            setError('Error deleting product.');
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => navigate('/products')}>Cancel</button>
        </div>
    );
};

export default DeleteProduct;
