import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} /> 
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img src={assets.about_img} className='w-full md:max-w-[400px]' alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>DishDirect was born out of passion for great taste and a desire to revolutionize the way people enjoy meals. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and order a wide range of dishes from the comfort of their homes.</p>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality meals that cater to every taste and craving. From local favorites and street food to healthy bites and international cuisine, we offer an extensive collection sourced from trusted chefs and restaurants.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at DishDirect is to empower customers with choice, convenience, and confidence in every meal. We're dedicated to providing a seamless dining experience that exceeds expectations – from exploring the menu and placing an order to enjoying fresh, delicious food delivered right to your doorstep.</p>
           </div>
      </div>

      <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'} /> 
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assuarance:</b>
           <p className='text-gray-600'>We carefully select trusted chefs and restaurants to ensure every meal is prepared with fresh ingredients, meeting our high-quality standards for safe, delicious, and satisfying food.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, enjoying your favorite meals has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, making sure your satisfaction and dining experience remain our top priority.</p>
        </div>

      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
