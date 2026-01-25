import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const TopMenu = () => {
   
    const { products } = useContext(ShopContext);
    const [topMenu,setTopMenu] = useState([]);

    useEffect(()=>{
      setTopMenu(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
         <Title text1={'TOP'} text2={'MENU'}/>
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
         Discover our most loved dishes, freshly made with the finest ingredients to delight your taste buds. From refreshing salads to hearty meals, every bite is crafted to bring you joy.
         </p>
      </div>
      {/*Rendering Products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            topMenu.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>

    </div>
  )
}

export default TopMenu
