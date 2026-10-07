import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: process.env.NODE_ENV ==="development" 
    ? ["query", "error", "warn"] 
    : ["error"],

});


const connectDB = async() => {
  try{
     await prisma.$connect();
     console.log("DB conneted via Prisma")

  } catch(error){
    console.error(" Databse Connection error ${error.message}");
    process.exit(1);

  }
}

const disconnectDB = async() => {
  await prisma.$disconnect();
}

export {prisma, connectDB, disconnectDB}; 