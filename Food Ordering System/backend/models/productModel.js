import mongoose from "mongoose";

//creating schema for our product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  sizes: { type: Array, required: true },
  date: { type: Number, required: true },
})

//creating a model for product
const productModel = mongoose.models.product || mongoose.model("product",productSchema)
                      /*when product model       /*when there's no model we have 
                      /* is available             to create a new model*/

export default productModel