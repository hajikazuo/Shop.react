import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;