import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from "@mui/material";
import { Login } from "../services/apis";

const userInitValue = {email:'', password:''}

const AddUser = () => {
    
    const [user, setUser] = useState(userInitValue);
    const {email, password} = user;
    const navigate = useNavigate();

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitLogin = async () => {
       const res = await Login(user);
       alert(res.data.message);
       console.log(res);
        // navigate('/all');
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