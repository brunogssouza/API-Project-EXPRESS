import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//DATABASE
let users = [];

//GET CONTROLLERS

export const getAllUsers = (req, res) => {
    res.send(users);
};

export const getSpecificUser = (req, res) => {
    const {id} = req.params;
    const specificUser = users.find((user) => user.id == id);
    res.send(specificUser);
}


// POST CONTROLLERS

export const createUser = (req, res) => {
    const newUser = req.body;
    const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
    const uniqueUser = {...newUser, id: userID};
    users.push(uniqueUser);
    
    
    console.log(req.body);
    res.send(`POSTING DONE. The user with the username of: ${uniqueUser.name} and the id of ${uniqueUser.id} was added to the database`);
}

//DELETE CONTROLLERS

export const deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    
    res.send(`User with the id of ${id} was deleted from the database`)
}

//PATCH CONTROLLERS 

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, lastName, Age} = req.body;
    console.log(req.body)

    const user = users.find((user) => user.id === id);
    console.log(user);

    if(name) {
        user.name = name;
    } 
    if(lastName) {
        user.lastName = lastName;
    } 
    if(Age) {
        user.Age = Age;
    } 

res.send(`The information of the user with the id of: ${id} was updated`);
}