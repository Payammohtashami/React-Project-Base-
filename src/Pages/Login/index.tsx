import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default LoginPage;