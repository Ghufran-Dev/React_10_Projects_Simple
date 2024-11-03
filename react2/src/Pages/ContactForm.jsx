import React, { useState } from 'react'
import Button from '../Components/Button'
import styles from './styles/contactForm.module.css'
import { MdMessage, MdEmail, MdCall } from 'react-icons/md'
const ContactForm = () => {
  let [name, setName] = useState('hello')
  let [email, setEmail] = useState('')
  let [address, setAddress] = useState('')

  const onviaClick = () => {
    console.log("i m form call")
  }

  const onSubmit = (e => {
    e.preventDefault()
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setAddress(e.target[2].value)
  })
  return (
    <div className='myContainer'>
      <div className='mt-3 md:mt-5 xl:min-w-[500px] md:min-w-[300px]'>
        {/* buttons */}
        <div className='flex gap-6 items-center text-center'>
          <Button txt={"Via Chat Support"} icon={<MdMessage fontSize={"2.2rem"} />} />
          <Button txt={"Via Call"} onClick={onviaClick} icon={<MdCall fontSize={"2.2rem"} />} />
        </div>
        <div className='mt-3 md:mt-5'>
          <Button isMailBtn={true} txt={"Via Email Form"} icon={<MdEmail fontSize={"24px"} />} />
        </div>

        {/* form */}
        <form action="" onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name" className='text-lg'>Name</label>
            <input type="text" name='name' id='name' placeholder='Enter Name' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email" className='text-lg'>Email</label>
            <input type="text" name='email' id='email' placeholder='Enter Email' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="address" className='text-lg'>Address</label>
            <textarea name="address" id="" cols="30" rows="4"></textarea>
          </div>
          <div className='mt-3 md:mt-5'>
            <Button txt={'Submit'} />
          </div>
        </form>
      </div>
      {/* <div>{name+" " +email+" " + address}</div> */}
      <div>{`name is ${name} email is ${email} address is ${address}`}</div>
    </div>
  )
}

export default ContactForm