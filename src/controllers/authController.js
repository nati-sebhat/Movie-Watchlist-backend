import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";



const register = async (req, res) => {
  const {name, email, password} = req.body;

  const userExists = await prisma.user.findUnique({
    where: {email: email},
});


if(userExists){
    return res.status(400).json({error: "User already exists with this email"});
}



const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);


const user = await prisma.user.create({
    data:{
        name,
        email,
        password: hashedPassword,
    },
    
});
res.status(201).json({
    status: "Succes",
    data: {
      id: user.id,
      name: name,
      email: email,

    },
})

};


const login = async (req, res) => {
    const { email, password } = req.body;


    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    if(!user){
        return res.status(400).json({error: "Invalid Email or Password"});
    };

};
export {register, login};