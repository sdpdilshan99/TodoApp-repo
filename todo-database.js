const mongoose = require('mongoose');
const dotenv = require("dotenv");


dotenv.config()

const url = process.env.Database_URL;


// Method 01 //
// const connectMongoDb = () =>  mongoose.connect(url)
//     .then( () => console.log("Database connection successfully"))
//     .catch( (error) => console.log(error.message));


// Method 02 //
const connectMongoDb = async () => {
    try{
        await mongoose.connect(url);
        console.log("Database connection successfully");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}


module.exports = connectMongoDb;


