import React, { useEffect, useState } from 'react';
import api from '../api';

const UserDashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await api.get('/auth/dashboard/');
                setMessage(res.data.message);
            } catch (error) {
                console.error('Failed to fetch user dashboard', error);
            }
        };
        fetchDashboard();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default UserDashboard;