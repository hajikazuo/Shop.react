import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/category/categories';
import HomePage from './pages/home';
import CreateCategory from './pages/category/categoryCreate';
import EditCategory from './pages/category/categoryEdit';
import CategoryDetails from './pages/category/categoryDetails';
import DeleteCategory from './pages/category/categoryDelete';

import ProductsPage from './pages/product/products';
import CreateProduct from './pages/product/productCreate';
import EditProduct from './pages/product/productEdit';
import ProductDetails from './pages/product/productDetails';
import DeleteProduct from './pages/product/productDelete';

export default function App() {
    return (
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />
        <Route path="/categories/:id" element={<CategoryDetails />} />
        <Route path="/categories/delete/:id" element={<DeleteCategory />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/delete/:id" element={<DeleteProduct />} />
      </Routes>
      </BrowserRouter>
    );
  }