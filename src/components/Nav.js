import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
class Nav extends Component {

    render() {
        const style = {
            color : 'black',
            fontWeight : 'bold'

        }
        return (
            <nav>
                <NavLink activeStyle={style} exact to="/"> Home </NavLink>
                <Link to="/about">About </Link>
                <NavLink activeStyle={style} to="/contact">Contact </NavLink>
            </nav>
        );
    }
}

export default Nav;