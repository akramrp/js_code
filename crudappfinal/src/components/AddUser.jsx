import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from "@mui/material";
import { addUser } from "../services/apis";

const userInitValue = {name:'', username:'', email:'', phone:''}

const AddUser = () => {
    
    const [user, setUser] = useState(userInitValue);
    const {name, username, email, phone} = user;
    const navigate = useNavigate();

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <FormGroup style={{width: '50%' }}>
        <Typography> ADD USER FORM </Typography>
        <Typography>&nbsp;</Typography>
            <FormControl>
                <InputLabel htmlFor="name">Name:</InputLabel>
                <Input name="name" onChange={(e) => onChangeValue(e)} value={name} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="username">Username:</InputLabel>
                <Input name="username" onChange={(e) => onChangeValue(e)} value={username} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="email">Email:</InputLabel>
                <Input name="email" onChange={(e) => onChangeValue(e)} value={email} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="phone">Phone:</InputLabel>
                <Input name="phone" onChange={(e) => onChangeValue(e)} value={phone} />
            </FormControl>
            &nbsp;
            <FormControl>
                <Button color="primary" variant="contained" onClick={() => submitUserDetails()} >Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;