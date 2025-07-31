import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SlIcon from "react-icons/sl";
import * as IoIcon from "react-icons/io";
import * as RiIcon from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { MdFormatListNumbered } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { IoInformationCircle } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";




export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
        {
        title: 'Plan',
        path: '/plan',
        icon: <MdFormatListNumbered/>,
        cName: 'nav-text'
    },
        {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaPhoneSquareAlt/>,
        cName: 'nav-text'
    },
        {
        title: 'About',
        path: '/about',
        icon: <IoInformationCircle/>,
        cName: 'nav-text'
    },
        {
        title: 'Sign In',
        path: '/signIn',
        icon: <FaAddressCard/>,
        cName: 'nav-text'
    
    },
        {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiDashboardHorizontalFill/>,
        cName: 'nav-text' 
        }
]