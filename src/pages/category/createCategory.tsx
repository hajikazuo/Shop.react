import React, { useState } from 'react';
import categoriesService from '../../services/categoriesService';
import { useNavigate } from 'react-router-dom';

const CreateCategory: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); 

        try {
            const newCategory = { name }; 
            await categoriesService.createCategory(newCategory);
            setName('');
            navigate('/categories');
        } catch (err) {
            setError('Error.');
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Create category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Category name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCategory;