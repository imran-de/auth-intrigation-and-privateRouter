import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, signout } = useAuth()
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Auth Intigration and privateRoute</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            {!user?.displayName ? <li className="nav-item">
                                <Link className="nav-link" to="/login">LogIn</Link>
                            </li> :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={signout}><span className="text-primary">{user?.displayName}</span> LogOut</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;