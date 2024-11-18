import { MdEmail } from 'react-icons/md'
import Button from '../../Components/Button'
import { useParams } from 'react-router-dom'
import { sendEmailVerification } from '../../Api/query/userQuery'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { useEffect } from 'react'
const RegisterEmailVerify = () => {
  const {email} = useParams()

  const { mutate, isLoading } = useMutation({
    mutationKey: ["sendEmailVerification"],
    mutationFn: sendEmailVerification,
    onSuccess: (data) => {
      console.log(data);
      
    },
    onError: (error) => {
      return (
        toast.error(error.message)
      )
    },
    enabled: !!email 
  })

  useEffect(()=>{
    mutate({email})
  }, [email])

  if (email === ""){
    return <div className='flex items-center justify-center text-4xl h-screen'>Invalid Email</div>
  }
  return (
    <div className='flex items-center h-screen'>

<div className='flex flex-col gap-10 rounded-xl shadow-xl justify-center items-center max-w-[50%] mx-auto border border-gray-500 p-6 text-gray-800'>

      <div className='text-purple-800'>
        <MdEmail fontSize={'5rem'}/>
      </div>

      <h1 className='text-[2.6rem] font-medium'>Email Verfication</h1>

      <p className='text-[1.6rem] text-center'>We have sent you an email verification to <span className='font-semibold'>{email}</span>. If you didn't receive it, click the button below.</p>

      <Button isLoading={isLoading} txt={"Re-Send Email"} signIn={true} onClick={()=>mutate({email})}/>
    </div>
</div>
  )
}

export default RegisterEmailVerify