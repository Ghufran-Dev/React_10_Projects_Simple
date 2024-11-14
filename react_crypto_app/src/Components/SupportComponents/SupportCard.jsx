import React from 'react'

const SupportCard = ({icon, title, p}) => {
  return (
    <div className='text-[1.8rem] flex flex-col gap-8'>
        <div className="text-purple-700 text-[3.2rem]">{icon}</div>
        <div className='text-[2.8rem] font-semibold'>{title}</div>
        <div className='text-gray-500'>{p}</div>
    </div>
  )
}

export default SupportCard