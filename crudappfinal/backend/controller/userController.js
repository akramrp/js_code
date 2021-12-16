import userModel from '../model/userModel.js';

export const getUsers = async (request, response) => {
    try{
        const usersDate = await userModel.find();
        response.status(200).json(usersDate);
    }
    catch( error ){
        response.status(404).json({message:error.message});
    }
}

export const addUser = async (request, response) => {
    const userData = request.body;
    const userObj = new userModel(userData);
    try{
        await userObj.save();
        response.status(201).json(userObj);
    }
    catch(error){
        response.status(401).json({message:error.message});
    }
    //response.send('Hi, this is calling addUser = async (request, response) => { // code }) function from userController');
}

export const getUserById = async (request, response) => {
    try{
        const singleUserData = await userModel.findById(request.params.id);
        response.status(200).json(singleUserData);
    }
    catch(error){
        response.status(404).json({message: error.message})
    }
    //response.send('Hi, this is calling getUserById = async (request, response) => { // code }) function from userController');
}

export const editUser = async (request, response) => {
    let singleUserData = userModel.findById(request.params.id);
    singleUserData = request.body;
    const editObj = new userModel(singleUserData); 
    try{
        await userModel.updateOne({_id: request.params.id}, editObj);
        response.status(200).json(editObj);
    }
    catch(error){
        response.status(404).json({message: error.message})
    }
}

export const deleteUser = async (request, response) => {
    try{
        await userModel.deleteOne({_id: request.params.id});
        response.status(200).json('User deleted successfully..');
    }
    catch(error){
        response.status(404).json({message: error.message})
    }
}