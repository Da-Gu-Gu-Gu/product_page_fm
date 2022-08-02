import React from 'react'
import ImageSlide from './ImageSlide'

const Landing = () => {
  return (
    <div className='w-4/5 mx-auto mt-5 flex flex-col lg:flex-row jusitfy-between h-screen'>
        <div className='w-full lg:w-1/2  h-1/2 lg:h-full flex justify-center  items-center '>
            <ImageSlide  />
        </div>
        <div className='w-full  lg:w-1/2  h-max lg:h-full flex flex-col  flex-wrap gap-5 justify-center   items-center '>
            <h2 className='text-orange-400 text-left  w-4/5 font-bold text-xl'>SNEAKER COMPANY</h2>
            <h2 className='text-left w-4/5 font-bold text-3xl'>
                Fall Limited Edition <br/>
                Sneakers
            </h2>
            <p className='w-4/5 text-left text-gray-400'>
                These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sale,they'll 
                withstand everything the weather can offer.
            </p>
            <p className='font-bold text-xl text-left w-4/5 mr-3 '>$ 100 .00 <span className='p-2 text-regular rounded-lg font-normal bg-orange-200 text-orange-400'>50%</span></p>
            <span className='text-gray-400  w-4/5 text-left'>$200</span>

            <div className='flex w-4/5 '>
                <div className='flex bg-slate-300 rounded-lg mr-3'>
                    <p className='p-3 text-orange-400 text-xl'>-</p>
                    <p className='p-3  text-xl'>0</p>
                    <p className='p-3 text-orange-400 text-xl'>+</p>
                </div>
                <div className='flex grow items-center justify-center bg-orange-400 rounded-lg text-white'>
                    Add to Cart
                </div>
            </div>

            </div>
    </div>
  )
}

export default Landing