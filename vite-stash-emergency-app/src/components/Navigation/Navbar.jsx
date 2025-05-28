import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as SlIcon from "react-icons/sl";
import { SidebarData } from "./SidebarData";
import './NavBar.css';
import {Link} from "react-router"
import { IconContext } from "react-icons/lib";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>
        <IconContext.Provider value={{color: '#000000'}}>
        <div className="sideNav">
            <Link to="#">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <SlIcon.SlClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}