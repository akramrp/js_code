import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { getUsers, deleteUser } from "../services/apis";

const Alluser = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        //console.log(response.status); // 200 success
        //console.log(response.data); // get object of data
        setUsers(response.data);
    }

    const deleteThisUser = async (id) => {
        if(window.confirm('Are you sure To delete this user?')){
            await deleteUser(id);
            getAllUsers();
        }
        else
            console.log('return no delate');
    }
    return (
        <Table>
            <TableHead>
                <TableRow style={{fontSize:'19'}}>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>USERNAME</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell>PHONE</TableCell>
                    <TableCell>ACTION</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((data) => (
                        <TableRow key={data._id}>
                            <TableCell>{data._id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" component={Link} to={`/edit/${data._id}`}>Edit</Button>&nbsp;
                                <Button color="secondary" variant="contained" onClick={()=> deleteThisUser(data._id) }>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Alluser;