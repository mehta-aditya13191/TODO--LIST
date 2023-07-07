
import React from 'react'
import {Link}  from "react-router-dom"

export const Header = () => {
    return <>
        <nav>Be enthusiastic to do your daily work</nav>

        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/Users/tempid">Users</Link>
           
        </div>
    </>
    //adityad file
}





