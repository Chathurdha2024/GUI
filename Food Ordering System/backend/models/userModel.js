import mongoose from "mongoose";

//user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    cartData: { type: Object, default: {}}, //when there is a new user there cart is empty
},{minimize:false})

//user model
const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel