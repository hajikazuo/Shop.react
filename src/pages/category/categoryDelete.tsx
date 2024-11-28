import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categoriesService from '../../services/categoriesService';

const DeleteCategory: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await categoriesService.deleteCategory(id!);
            navigate('/categories');
        } catch (err) {
            setError('Error deleting category.');
            console.error(err);
        }
    };

    const handleCancel = () => {
        navigate('/categories');
    };

    return (
        <div>
            <h2>Delete Category</h2>
            <p>Are you sure you want to delete this category?</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleDelete} style={{ marginRight: '10px' }}>
                Yes, delete
            </button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default DeleteCategory;
