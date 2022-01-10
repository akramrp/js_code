import React from 'react';
import { AppBar, Toolbar,Button  } from "@mui/material";
import {useNavigate, NavLink} from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem("loginData");
    const navigate = useNavigate()
    const logout = () => {
        // if(window.alert('Are you sure to logout🤨')){
            localStorage.clear();
            navigate('/login');
        // }
        
    }
    return (
        <>
            <Button><NavLink to='/' exact="true">[LOGO]  Home </NavLink></Button>
            { auth ?   <>
                    <Button><NavLink to='all' exact="true">All User </NavLink></Button>
                    <Button><NavLink to='profile' exact="true">Profile </NavLink></Button>
                    <Button><NavLink onClick={logout} to='login' exact="true">Logout </NavLink></Button>   
                </>
            
            :   <>
                    <Button><NavLink to='add' exact="true">Signup </NavLink></Button>
                    <Button><NavLink to='login' exact="true">Login </NavLink></Button>
                </> 
            }
        </>
    )
}

export default Navbar;

// {
//     (() => {
//         if (auth) {
//             return (
//                 <>
//                     <Button><NavLink to='/' exact="true">Home </NavLink></Button>
//                     <Button><NavLink to='add' exact="true">Add User </NavLink></Button>
//                     <Button><NavLink to='all' exact="true">All User </NavLink></Button>
//                     <Button><NavLink to='profile' exact="true">Profile </NavLink></Button>
//                     <Button><NavLink onClick={logout} to='login' exact="true">Logout </NavLink></Button>   
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <Button><NavLink to='/' exact="true">Home </NavLink></Button>
//                     <Button><NavLink to='login' exact="true">Login </NavLink></Button>
//                 </>
//             )
//         }
//     })()
// }