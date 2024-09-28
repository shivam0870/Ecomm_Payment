import jwt from 'jsonwebtoken'
import {User} from '../Models/User.js'

export const Authenticated = async (req,res,next) => {
    const token = req.header("Auth");
    if(!token) return res.json({
        message : "Kindly Login First"
    })
const decoded = jwt.verify(token,"wf34t4gwg4");
console.log(`decoded - ${decoded}`);
const id = decoded.userId;
console.log(`id - ${id}`);
let user = await User.findById(id);
console.log(`user - ${user}`);
if(!user){
    return res.json({
        message : "User does not exists"
    })
}
req.user = user
next();
} 