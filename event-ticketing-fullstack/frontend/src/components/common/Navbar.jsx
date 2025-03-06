import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import UserService from '../service/UserService';
import './Navbar.css';


const Navbar = () => {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        UserService.logout();
        navigate('/');
    };

    return (
        <nav>
            <ul>
                {isAuthenticated && <li><Link to="/events">BILETERIE</Link></li>}
                {!isAuthenticated && <li><Link to="/">BILETERIE</Link></li>}
            </ul>
            <ul>
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/events">Events</Link></li>}
                {isAdmin && <li><Link to="/admin/events">Manage Events</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;
