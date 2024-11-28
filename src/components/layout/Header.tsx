import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate('/login');
    };

    return (
        <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
            <nav>
                <Link to="/" style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
                <Link to="/categories" style={{ marginRight: '10px', color: '#fff' }}>Categories</Link>
                <Link to="/products" style={{ marginRight: '10px', color: '#fff' }}>Products</Link>

                {AuthService.isAuthenticated() && (
                    <button
                        onClick={handleLogout}
                        style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#f44336', color: '#fff', border: 'none', cursor: 'pointer' }}
                    >
                        Logout
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;
