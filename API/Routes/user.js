import express from "express";
import { register, users } from "../Controllers/user.js";
import {login} from "../Controllers/user.js";

const router = express.Router();

//Register user
router.post('/register', register)

//Login user
router.post('/login', login);

//Get all users
router.get('/all',users);

export default router;