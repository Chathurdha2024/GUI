import React, { useState } from "react"
import {assets} from '../assets/assets'
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";
 
const Add = ({token}) => {

  //state variables to store four images
  const [image1,setImage1] = useState(false)
  

  //state variables to store the other data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Salad");
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault(); //when we submit the form, page is not reloaded
    
    try {
      //all the variables are stored as formdata when we submit the form
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("sizes",JSON.stringify(sizes)) //here our array is converted to string and in the backend ,again converted it to an array

      image1 && formData.append("image1",image1) //image1 is stored in formdata only when the image1 is available
      
      //sending formdata using api on our backend
      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      //making the form reset after adding one product
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setPrice('')
      } else{
        toast.error(response.data.message) //if the product was not added it display an error message
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  

  return (
   <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
    <div>
      <p className="mb-2">Upload Image</p>

      <div className="flex gap-2">
        <label htmlFor="image1">
          <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
        </label>
      </div>
    </div>

    <div className="w-full">
      <p className="mb=2">Product name</p> 
      <input onChange={(e)=>setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
    </div>             
    

    <div className="w-full">
      <p className="mb=2">Product description</p>
      <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" required />
    </div>

    <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
      <div>
        <p className="mb-2">Product category</p>
        <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-3 py-2">
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cakes">Cakes</option>
          
          
         

        </select>
      </div>

      

      <div>
        <p className="mb-2">Product Price</p>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="Number" placeholder="25"/>
      </div>


    </div>

    <div>
      <p className="mb-2">Portion Size</p>
      <div className="flex gap-3">
        <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter( item => item !== "S") : [...prev,"S"])}>
          <p className={`${sizes.includes("S") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
        </div>

        <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter( item => item !== "M") : [...prev,"M"])}>
          <p className={`${sizes.includes("M") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
        </div>

        <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter( item => item !== "L") : [...prev,"L"])}>
          <p className={`${sizes.includes("L") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
        </div>
      </div>
    </div>

    
    
    <button type="submit" className="w-28 py-3 mt-4 bg-black text-white" >ADD</button>

   </form>
  )
};

export default Add;
