import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo" style={{marginLeft: 30}}>BookHub</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Most Read</a></li>
                        <li><a href="collapsible.html" style={{ marginRight: 30 }}>Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;