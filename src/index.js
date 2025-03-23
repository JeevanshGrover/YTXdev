//database connection could have been done here as well but we made a seperate folder and file to do it to modularise and improve readability of the code 

//require('dotenv').config({path: './env'}) -----old syntax----

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();