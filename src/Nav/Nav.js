import React from "react";
import './nav.scss'

import { NavLink } from "react-router-dom"



class Nav extends React.Component {


    render() {
        return (
            <div className="topnav" >
                <NavLink activeClassName="active" to="/" >Home</NavLink>
                <NavLink to="/todos" >Todos</NavLink>
                <NavLink to="/about" >About</NavLink>

            </div >
        )
    }
}

export default Nav;