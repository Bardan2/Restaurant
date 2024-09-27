import React from 'react'

const ChefTeam = ({img, nam, cat}) => {
  return (
    <div className='grid m-4'>
        <div className='text-center w-full grid place-items-center'>
              <img src={img} className='w-40' alt="Master chef" />
              <h2 className='font-bold text-lg text-stone-950 pt-3'>{nam}</h2>
              <h2 className='font-normal text-sm text-stone-950'>{cat}</h2>
            </div>
    </div>
  )
}

export default ChefTeam