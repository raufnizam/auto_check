import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className="btn bg-red-500 text-white">
            Logout
        </button>
    );
};

export default Logout;