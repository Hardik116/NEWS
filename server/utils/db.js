const mongoose = require('mongoose');
const URI = "mongodb+srv://hardik:HHrathod26@cluster0.k2xt8cg.mongodb.net/mern?retryWrites=true&w=majority";

const connectdb=async()=>{
    try {
        mongoose.connect(URI);
        console.log("connection succesful")
    } catch (error) {
        console.error("database connection fail");
        process.exit(0);
        
    }
}
module.exports= connectdb;