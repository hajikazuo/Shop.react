import React, { useEffect, useState } from 'react';
import categoriesService from '../../services/categoriesService';
import { CategoryResponse } from '../../models/category/CategoryResponse';
import { Link } from 'react-router-dom';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await categoriesService.getCategories();
        setCategories(result);
      } catch (error) {
        console.error('Error returning data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <Link to="/categories/create">Create Category</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.categoryId}>
              <td>{category.categoryId}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/categories/edit/${category.categoryId}`}>Edit</Link>
                <Link to={`/categories/${category.categoryId}`}>Details</Link>
                <Link to={`/categories/delete/${category.categoryId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesPage;
