import { Outlet} from "react-router-dom";
import React from "react"
import AppNavbar from "./AppNavbar";
import Footer from "./componnents/Footer";


export default function Layout() {
  return (
      <div className="site-wrapper">
          {User &<AppNavbar/>}
          <main>
              <Outlet />
          </main>
          <Footer />
      </div>
  )
}
 