import React from 'react'
import { Link } from 'gatsby'


const footer = () => {
    return (

        <footer>
        <div className="footer-wrapper">
            <div className="container">
            <ul>
                <li>
                    Copyright &copy; <Link to="/">Jakob Suckow </Link> 
                    {new Date().getFullYear()}
                </li>
                <li>All rights reserved</li>
                <li>Social: 
                    Jakob Suckow
                    Jakob.suckow94@googlemail.com

                </li>
            </ul>
            </div>
        </div>
        <Link to="/">
        </Link>
        </footer>
        

    )
}

export default footer