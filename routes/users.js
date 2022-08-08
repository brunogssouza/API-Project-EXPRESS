import express from "express";
import {createUser, getAllUsers, getSpecificUser, deleteUser, updateUser } from '../controllers/users.js'


//ROUTER
const router = express.Router();

//DATABASE
let users = [];

//GET ROUTES
router.get('/', getAllUsers)
router.get('/:id', getSpecificUser)


//POSTMAN ROUTES {

//POST ROUTES
router.post('/', createUser)

//DELETE ROUTES
router.delete('/:id', deleteUser)


//UPDATE ROUTES
router.patch('/:id', updateUser);

//}

export default router;