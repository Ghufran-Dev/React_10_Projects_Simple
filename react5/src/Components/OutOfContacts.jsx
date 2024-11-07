import React from 'react'

const OutOfContacts = () => {
  return (
    <div className='flex items-center gap-10 mt-10'>
        <img src="/images/contact.png" alt="" width={'40rem'}/>
        <h1 className='text-[3rem] text-white font-medium'>Contacts not found</h1>
    </div>
  )
}

export default OutOfContacts