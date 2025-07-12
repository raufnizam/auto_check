import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ isAuthenticated, onLogout }) => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold text-gray-700">
                    Our App
                </Link>
                <div>
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 mr-4">Dashboard</Link>
                            <Link to="/chatbot" className="text-gray-700 hover:text-blue-600 mr-4">Chatbot</Link>
                            <Logout onLogout={onLogout} />
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-blue-600 mr-4">Login</Link>
                            <Link to="/register" className="btn btn-primary">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;