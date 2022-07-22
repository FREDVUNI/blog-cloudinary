const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true, 
        })
        console.log(`connected to mongoDB.`);
    }
    catch(error){
        console.log(error.message || 'Failed to connect')
        process.exit(1)
    }
}

module.exports = connectDB