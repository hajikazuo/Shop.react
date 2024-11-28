import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: '200px', background: '#f4f4f4', padding: '1rem' }}>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
