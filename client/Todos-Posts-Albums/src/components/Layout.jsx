import { Outlet} from "react-router-dom";
import React from "react"
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { UserContext } from '../App';


export default function Layout() {
    
  const { user } = React.useContext(UserContext);
  console.log(user);
  return (
    
      <div className="site-wrapper">
          {user && <AppNavbar />}
          <main>
              <Outlet />
          </main>
          {/* <Footer /> */}
      </div>
  )
}
 