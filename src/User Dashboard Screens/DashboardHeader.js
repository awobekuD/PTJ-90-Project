import React from 'react';
import { Link } from 'react-router-dom';
//import './UserDashboard.css';

const DashboardHeader = () => {
    return (
        <nav className="dashboard-nav">
            <Link className="navbar-brand" to="/">
                <img src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg" alt=''/>
            </Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to=''>My Transactions</Link></li>
                <li><Link to=''>My Profile</Link></li>
            </ul>
        </nav>
    )
}

export default DashboardHeader
