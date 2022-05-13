import React from "react";
import { authService } from "myFirebase";
import { Link } from "react-router-dom";


const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
    };
    return (
        <>
            <button onClick={onLogOutClick}><Link to="/">Log Out</Link></button>
        </>
    )
}

export default Profile;