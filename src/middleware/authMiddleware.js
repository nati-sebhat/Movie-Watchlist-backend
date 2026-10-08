import jwt from "jsonwebtoken"
import {prisma} from "../config/db.js"


export const authMiddleware = async (req, res, next) => {
    console.log("Auth middleware reached");

    let token;

    if(
        req.headers.authorization &&
        req,headers.authorization.startsWith("Bearer")
    ){
        token = req.headers.authorization.split(" ")[1];
    }else if (req.cookies.jwt){
        token = req.cookies.jwt;
    }
if(!token){
    return res.status(401).json({erro: "Not authorized, no token provided"});
}

try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
}catch (err) {

}
};