import React from "react";
import NavItem from "../NavItem/NavItem";


const Navbar = () => {
    return (
        <article className="navbar box">
            <ul className="navbar__nav">
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </ul>
        </article>
    )
};

export default Navbar;