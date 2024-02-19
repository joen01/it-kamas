import React from 'react';
import f from  "./Navbar.module.css"

const Navbar = () => {
    return     <nav className= {f.nav} >
        <div className={f.item}><a>Profile</a></div>
        <div className={f.item}><a>Messages</a></div>
        <div className={f.item}><a>News</a></div>
        <div className={f.item}><a>Music</a></div>
        <div className={f.item}><a>Settings</a></div>
    </nav>
}
export default Navbar