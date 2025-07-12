import React from 'react';
import { jwtDecode } from 'jwt-decode';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const isStaff = decodedToken.is_staff;

    return isStaff ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;