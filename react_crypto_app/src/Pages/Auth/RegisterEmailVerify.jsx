import { MdEmail } from 'react-icons/md'
import Button from '../../Components/Button'
const RegisterEmailVerify = () => {
  return (
    <div className='flex items-center h-screen'>

<div className='flex flex-col gap-10 rounded-xl shadow-xl justify-center items-center max-w-[50%] mx-auto border border-gray-500 p-6 text-gray-800'>

      <div className='text-purple-800'>
        <MdEmail fontSize={'5rem'}/>
      </div>

      <h1 className='text-[2.6rem] font-medium'>Email Verfication</h1>

      <p className='text-[1.6rem] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit <span className='font-semibold'>Jenny.willson@gmail.com</span> debitis saepe, blanditiis praesentium natus numquam sed impedit.</p>

      <Button txt={"Re-Send Email"} signIn={true}/>
    </div>
</div>
  )
}

export default RegisterEmailVerify