const {PrismaClient} = require('@prisma/client')
const {PrismaPg}= require("@prisma/adapter-pg");
const { Pool } = require("pg");
require("dotenv").config();


//required configuration
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter: adapter });

async function connectDB(){
    try{
        await prisma.$connect();
        console.log("database connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = {  prisma, connectDB };