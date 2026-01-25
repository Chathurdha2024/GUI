import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter) /*2) added this router in server.js file -----if we want to check the API, we should type /api/user/register
                                                                                                                          /api/user/login  in Thunder Client*/
app.use('/api/product',productRouter) 
app.use('/api/cart',cartRouter)   
app.use('/api/order',orderRouter)                                                                                                                      

app.get('/',(req,res)=>{
    res.send("API Working")  //When we open local host port 4000(it means web), it should display "API Working"
})


//start the express server
app.listen(port, ()=> console.log('Server started on PORT : '+ port))