import React, { useContext } from "react";
import { AuthContext } from "../index";
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const auth = useContext(AuthContext);
    const signOut = () => {
        auth.setLoggedIn(false);
    }

    if (auth.isLoggedIn === true) {
        return signOut();
    } else {
        return <Navigate to='/login' />
    }
}
export default Logout;