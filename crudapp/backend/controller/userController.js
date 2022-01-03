import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    try{
        const usersDate = await userModel.find();
        res.status(200).json(usersDate);
    }
    catch( error ){
        res.status(404).json({message:error.message});
    }
}

export const addUser = async (req, res) => {
    let userData = req.body;
    userData.password = bcrypt.hashSync(userData.password, 10);
    const userObj = new userModel(userData);
    try{
        await userObj.save();
        res.status(201).json(userObj);
    }
    catch(error){
        res.status(401).json({message:error.message});
    }
    //res.send('Hi, this is calling addUser = async (req, res) => { // code }) function from userController');
}

export const getUserById = async (req, res) => {
    try{
        const singleUserData = await userModel.findById(req.params.id);
        res.status(200).json(singleUserData);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
    //res.send('Hi, this is calling getUserById = async (req, res) => { // code }) function from userController');
}

export const editUser = async (req, res) => {
    let singleUserData = req.body;
    singleUserData.password = bcrypt.hashSync(singleUserData.password, 10);
    const editObj = new userModel(singleUserData); 
    try{
        await userModel.updateOne({_id: req.params.id}, editObj);
        res.status(200).json(editObj);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try{
        await userModel.deleteOne({_id: req.params.id});
        res.status(200).json('User deleted successfully..');
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}


export const login = async (req, res) => {
    let singleUserData = await userModel.find({"email":req.body.email});
    // userData.password = bcrypt.hashSync(singleUserData[0].password, 10);
    // console.log(singleUserData[0].password);
    try{
        if(singleUserData.length>0){
            let passwordHash = singleUserData[0].password;
            // if(singleUserData[0].password == req.body.password)
            if( bcrypt.compareSync(req.body.password, passwordHash) )
                res.json({message:"Success😊! You are login now."});
            else
                res.json({message:"Error😢! Incorrect Password. Please Enter Correct Password."});
        }
        else{
            res.json({message:"Error😢! User Not Found."});
        }
    }
    catch(error){
        res.status(401).json({message:error.message});
    }
}