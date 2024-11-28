import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import categoriesService from '../../services/categoriesService';
import { CategoryResponse } from '../../models/category/CategoryResponse';

const CategoryDetails: React.FC = () => {
    const [category, setCategory] = useState<CategoryResponse | null>(null);
    const [error, setError] = useState<string>('');
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const categoryData = await categoriesService.getCategoryById(id!);
                setCategory(categoryData);
            } catch (err) {
                setError('Error fetching category.');
                console.error(err);
            }
        };
        fetchCategory();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Category Details</h2>
            <p><strong>ID:</strong> {category.categoryId}</p>
            <p><strong>Name:</strong> {category.name}</p>
            <Link to={`/categories/edit/${category.categoryId}`}>Edit</Link>
            <Link to={`/categories`} style={{ marginLeft: '10px' }}>Back to Categories</Link>
        </div>
    );
};

export default CategoryDetails;
