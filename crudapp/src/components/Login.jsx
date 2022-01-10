import React, {useState, useEffect} from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from "@mui/material";
import { Login } from "../services/apis";

const userInitValue = {email:'', password:''}

const AddUser = () => {
    
    const [user, setUser] = useState(userInitValue);
    const {email, password} = user;
    const navigate = useNavigate();

    useEffect( () => {
        const auth = localStorage.getItem("loginData");
        if(auth)
            navigate('/');
    }, [])

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitLogin = async () => {
        const res = await Login(user);
        // console.log(res);
        if(res.data.error){
            alert(res.data.error);   
        }
        else{
            let userObj = res.data;
            delete userObj.password;
            localStorage.setItem('loginData', JSON.stringify(userObj));
            console.log("Success😊\nYou are login now.");
            navigate('/profile');
        }
    }

    return (
        <FormGroup style={{width: '50%' }}>
        <Typography> LOGIN FORM </Typography>
        <Typography>&nbsp;</Typography>
            <FormControl>
                <InputLabel htmlFor="email">Email:</InputLabel>
                <Input type="email" name="email" onChange={(e) => onChangeValue(e)} value={email} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="password">Password:</InputLabel>
                <Input type="password" name="password" onChange={(e) => onChangeValue(e)} value={password} />
            </FormControl>
            &nbsp;
            <FormControl>
                <Button color="primary" variant="contained" onClick={() => submitLogin()} >Login</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;