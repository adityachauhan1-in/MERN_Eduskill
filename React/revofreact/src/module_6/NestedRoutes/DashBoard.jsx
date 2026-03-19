import React from "react";
import {Link, Outlet} from 'react-router-dom'
function DashBoardLayout() {

    return(
        <>
        <div>
            <h2>DashBoard Menu</h2>
            <nav>
                <ul>
                    <li> <Link to="overview"> Overview</Link></li>
                    <li> <Link to="profile"> Profile</Link></li>
                    <li> <Link to="setting"> Setting</Link></li>
                </ul>
            </nav>
            <hr/>
            <Outlet/>
        </div>
        </>
    )
}
export default DashBoardLayout