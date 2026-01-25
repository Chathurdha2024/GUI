import express from 'express';
import { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser)  //1)first added the function in the routes
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;