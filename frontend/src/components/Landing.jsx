import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
                    Welcome to <span className="text-blue-600">Our App</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    The ultimate solution for boosting your productivity and managing your tasks seamlessly.
                </p>
                <Link to="/register">
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;