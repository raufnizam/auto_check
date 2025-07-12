import React, { useEffect, useState } from 'react';
import api from '../api';

const AdminDashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await api.get('/auth/dashboard/');
                setMessage(res.data.message);
            } catch (error) {
                console.error('Failed to fetch admin dashboard', error);
            }
        };
        fetchDashboard();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default AdminDashboard;