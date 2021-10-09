import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { signInWithGoogle, user } = useFirebase()

    console.log(user)
    return (
        <div className="container">
            <h3>It's Login page</h3>

            {
                user?.displayName
            }

            <button onClick={signInWithGoogle} className="btn btn-outline-warning">SignIn with Google</button>
        </div>
    );
};

export default Login;