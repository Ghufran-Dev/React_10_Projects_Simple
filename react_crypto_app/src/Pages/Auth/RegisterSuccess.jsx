import { BsPatchCheckFill } from 'react-icons/bs'
import Button from '../../Components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from "react-query"
import { verifyEmailAddressSignup } from '../../Api/query/userQuery'
import {toast } from "react-toastify"
const RegisterSuccess = () => {
  const navigate = useNavigate()
  const {token} = useParams()
  const {isSuccess, isLoading }= useQuery({
    queryKey:["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({token}),
    enabled: !!token,
    onError: (error) =>{
      return (toast.error(error.message), 
      navigate("/signup"))
    }
  })

  if(isLoading) return <div>Loading...</div>
  return (
    <div className='flex items-center h-screen'>

      {isSuccess && <div className='flex flex-col gap-10 rounded-xl shadow-xl justify-center items-center max-w-[50%] mx-auto border border-gray-500 p-6 text-gray-800'>

        <div className='text-purple-800'>
          <BsPatchCheckFill fontSize={'5rem'} />
        </div>

        <h1 className='text-[2.6rem] font-medium'>Successfully Registered</h1>

        <p className='text-[1.6rem] text-center'>Lorem, ipsum dolor sit amet blanditiis praesentium natus numquam sed impedit.</p>
        <div className='w-full'>
          <Link to={"/logIn"}>
            <Button txt={"Enter the App"} signIn={true} />
          </Link>
        </div>

      </div>}
    </div>
  )
}

export default RegisterSuccess