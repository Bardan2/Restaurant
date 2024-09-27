import React from 'react'
// import ImageJack from "../../assets/ImageJack.png"

const TestimonialCards = ({img, name, location, desc}) => {
  return (
    <div className='shadow-md my-2 bg-gray-800 w-full px-8 py-10 text-white rounded-md'>
        <div className='flex gap-4 mb-4'>
        <img src={img} className='w-16' alt="" />
        <div className='mt-2'>
        <h1 className=''>{name}</h1>
        <p className='text-amber-500'>{location}</p>
        </div>
        </div>
        <hr />
        <p className='text-sm font-thin mt-4'><i>"{desc}"</i></p>
    </div>
  )
}

export default TestimonialCards