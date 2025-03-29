const mongoose  = require("mongoose");

// Connection Url
// const connectionUrl = "mongodb://127.0.0.1:27017/todoDb";

const connectMongoDb = async()=>{
try {
    await mongoose.connect(process.env.CONNECTION_URL)
    console.log("Database connected successfully!!!")
} catch (error) {
    console.log(error.message)
    process.exit(1)
}
}



module.exports = connectMongoDb;