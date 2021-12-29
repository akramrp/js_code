import React from 'react';
import { AppBar, Toolbar,Button  } from "@mui/material";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Button><NavLink to='/' exact="true">Home </NavLink></Button>
            <Button><NavLink to='all' exact="true">All User </NavLink></Button>
            <Button><NavLink to='add' exact="true">Add User </NavLink></Button>
        </>
    )
}

export default Navbar;