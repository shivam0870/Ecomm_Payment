import express from "express";
import { profile, register, users } from "../Controllers/user.js";
import {login} from "../Controllers/user.js";
import { Authenticated } from "../Middlewares/auth.js";

const router = express.Router();

//Register user
router.post('/register', register)

//Login user
router.post('/login', login);

//Get all users
router.get('/all',users);

//Get user Profile
router.get('/profile', Authenticated, profile)

export default router;