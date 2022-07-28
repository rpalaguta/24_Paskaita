import React from "react";
import './navBar.css'
import { Link } from "react-router-dom";
import routeCollection from "../../collections/routeCollection";

const NavBar = () => {
    return (
        <div className="navBar">
            <div><h2 className="pageName">OnePage</h2></div>
            <div className="navLinks">
                {
                    routeCollection.map(route => (
                        <div className="navElement"><Link to={route.path}>{route.name}</Link></div>
                    ))
                }
                <div className="navSelect">
                    <select name="navSelect" id="navSelect">
                        <option value="option1">Dropdown</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="navElement"><a className="Button" href="#">Get Started</a></div>
            </div>
        </div>
    )
}

export default NavBar;