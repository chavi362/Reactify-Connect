import { Outlet } from "react-router-dom";
import React, { useContext, useEffect } from "react"
import AppNavbar from "./AppNavbar";
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';


export default function Layout() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user)
            navigate('/login')
    }), [user]

    return (
        <div className="site-wrapper">
            {user && <AppNavbar />}
            <main>
                <Outlet />
            </main>
        </div>
    )
}
