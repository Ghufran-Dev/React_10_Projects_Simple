import { BsPatchCheckFill } from 'react-icons/bs'
const SuccessfullySent = () => {
  return (
    <div className='flex items-center h-screen'>

      <div className='flex flex-col gap-10 rounded-xl shadow-xl justify-center items-center max-w-[50%] mx-auto border border-gray-500 p-6 text-gray-800'>

        <div className='text-purple-800'>
          <BsPatchCheckFill fontSize={'5rem'} />
        </div>

        <h1 className='text-[2.6rem] font-medium'>Successfully Sent</h1>

        <p className='text-[1.6rem] text-center'>Lorem, ipsum dolor sit amet blanditiis praesentium natus numquam sed impedit.</p>
       

      </div>
    </div>
  )
}

export default SuccessfullySent