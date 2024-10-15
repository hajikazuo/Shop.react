import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/category/categories';
import HomePage from './pages/home';
import CreateCategory from './pages/category/createCategory';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/create" element={<CreateCategory />} />
        </Routes>
      </BrowserRouter>
    );
  }