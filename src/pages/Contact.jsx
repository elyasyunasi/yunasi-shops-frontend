import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
   
     <div>
        <div className='text-center text-2xl p-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>
         
         <div className='my-30 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>$47900 Girne City Sattle 350, Kyrinea</p>
          <p className='text-gray-500'>Tel: (533) 555-1234 <b>Email: admin@yunasi.com</b></p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Yunasi</p>
          <p className='text-gray-500'>Learn mre about our teams and job openings</p>
          <button className='border-black border text-sm px-8 py-4 ' >Explore Jobs</button>
      </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default Contact
