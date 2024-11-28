import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import categoriesService from '../../services/categoriesService';
import { CategoryResponse } from '../../models/category/CategoryResponse';

const EditCategory: React.FC = () => {
    const [category, setCategory] = useState<CategoryResponse | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (category) {
            try {
                await categoriesService.updateCategory(id!, category);
                navigate('/categories');
            } catch (err) {
                setError('Error updating category.');
                console.error(err);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (category) {
            setCategory({
                ...category,
                [e.target.name]: e.target.value,
            });
        }
    };

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Edit Category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Category Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={category.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditCategory;
