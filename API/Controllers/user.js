import { User } from '../Models/User.js'
import bcrypyt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "Email already exist",
                success: false
            })

        }
        else {
            const hashPass = await bcrypyt.hash(password, 10);
            let user = await User.create({ name, email, password: hashPass });
            res.json({
                message: "User register successfully", user,
                success: true

            })
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user)
            return res.json({
                message: "User Not Found",
                success: false
            })
        const validPassword = await bcrypyt.compare(password, user.password);
        if (!validPassword)
            return res.json({
                message: "Invalid Credentials",
                success: false
            })

const token = jwt.sign({userId : user._id}, "wf34t4gwg4",  {
    expiresIn : '365d'
})

        res.json({
            message: `Welcome ${user.name}`,
            token,
            success: true,
        })

    } catch (error) {
        res.json({
            message: error.message,
            success: false
        })
    }
}

export const users = async (req, res) => {
    try {
        let users = await User.find().sort({
            createdAt: -1
        })
        res.json({
            message: "Users fetched successfully",
            users

        })
    } catch (error) {
        res.json(error.message);
    }
}