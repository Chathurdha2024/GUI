import mongoose from "mongoose";

const connectDB = async () => {
    
    mongoose.connection.on('connected',() => {    //When mongodb connection is established ,this function become active.That means database is connected successfully.
        console.log("DB Connected");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/forever`) //video eke ecommerce kiyl damme meka //project name

}

export default connectDB;