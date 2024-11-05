import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="custom-navbar">
            <Link to="/" className="navbar-brand">
                <img 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HDhARBxAQDQ8PDQ4PDQ0NDQ8NDg4OFhMWFhYWExMaHSggGBoxGxUTJTElMSosMzowFx84ODMuNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMABBwMBIgACEQEDEQH/xAAcAAEAAgEFAAAAAAAAAAAAAAAABQYEAQIDBwj/xABBEAEAAgECAgYDDQMNAAAAAAAAAQIDBBEFIQYSIjFBUWGBkRMWIzIzUlVxlLHB0dJyguEHFDVCQ1NidJOhssLw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpa0ViZtyiI3mZ5REK/xDpBO810Pd/eWjff8AZgFhFe6OZsmoy5LZrWvtSI7UzMRMz4R4d0rCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv9JtbMbYsc7bx1snpjwj8fYr6X4loNRq9RknHjtMbxEWns12iIjvlncN4FGCYtq5i9o5xSPixPp8wc/R/RzpcW+SNrZJ60x4xXwj/AN5pRpvENQAAAAAAAAAAAAAAAAAAAAAAAAAY+u1MaTHa9vCOUedvCAY/E+KU0EbfHvMcqRO23pmfBXdRxfUZ5+PNI8sfZiPX3sTNltmtNsk72tO8y2A541uavdlyf6lvzZ+k49mw8s+2WPT2be2ESAsGbpJvHwGPafO87xHqjvROo4ln1HymS23zaz1Y9kMUA33Zmj4nn0k/B2mY+Zfe1f4MMiN+4Fz4bxGmvr2OzaPjUnvj0x5wzURwbhMaXa+f5TbuieVInw9MpcAAAAAAAAAAAAAAAAAAAAAABX+lWf5Okem8/dH4rAqnSad9R9WOv3yCKAAAAAASnR3TRnzda3OMcdb97w/GfUi1g6Kf23n8H/2BYAAAAAAAAAAAAAAAAAAAAAAAAFY6UY9s1bfOx7euJn84WdD9JtP7pii8d+O3P9meU/77Aq4AAAAACV6OaiMObq25Rkr1f3o5x+PtRREzHOOUxziY74kHYAheGccpliK6yYpeP688q2/KUzExaN45xPOJjnEwDUAAAAAAAAAAAAAAAAAAAAABszY4zVtW/OLRMT9Ut4CiarBbTXtTJ31nb648J9jiWbpFoPdq+6Yo7VI7UR40/grIAAAAAAMrhuknW5a18O+8+VY7/wAvWusRt3I7geg/mePfJHwl9pt/hjwhJAAAAAAAAAAAAAAAAAAAAAAAAAKvxfg98VpvpKzak85rXnNJ+ryWgB1/Mbd/sZuk4Xn1fxK9Wvzr9mPV5rltDUFa97eTb5Sm/ltO3tRur4fm0k/DUnb51e1X2ruA6/8AqT3AuFT1oy6qsxEc8dLRtMz5zCfjHWJ3isb+e0bt4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb328I+kdD9u0/wCo99vCPpHQ/btP+p5M4JHDrUyRxmctb2vgjDfFXeMdItvlm3pmvKOVu/fZJ49P0fy2j3bNqsNYrNbRT4WbWjfa284479o5beMd3PYPUHvt4R9I6H7dp/1Hvt4R9I6H7dp/1PMlqdHc8W7Wp08zlt1Yp1r7Yorl6vKYnvtOLxmezty52QPHY0dc0RwSb2wxjpHWyzM3tk27Uzyj7oB7N02ox6ulcmlvTLjvWLUyY7Rel6z3TW0cphyq1/Jt/QnDv8jg/wCMLKAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" 
                    alt="logoapple" 
                    className="navbar-logo" 
                />
                iStore - Reseller Oficial
            </Link>
            <div className="navbar-nav">
                <NavLink to="/category/iPhone" className={({ isActive }) => isActive ? 'active-option' : 'option'}> iPhone </NavLink>
                <NavLink to="/category/Macs" className={({ isActive }) => isActive ? 'active-option' : 'option'}> Macs </NavLink>
                <NavLink to="/category/Watch" className={({ isActive }) => isActive ? 'active-option' : 'option'}> Watch </NavLink>
            </div>
            <div className="cart-widget">
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;

