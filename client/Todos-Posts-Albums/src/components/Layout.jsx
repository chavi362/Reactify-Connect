import { Outlet, useLocation } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import "../sass/appNavBar.scss"
export default function Layout({deleteUser}) {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!user && location.pathname !== '/register') {
            navigate('/login');
            console.log('path', location.pathname)
        }

    }, [])
    return (
        <div className="site">
            {user && <AppNavbar deleteUser={deleteUser}/>}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
