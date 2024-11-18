import Button from '../../Components/Button'
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { signUpUser } from '../../Api/query/userQuery'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useState } from 'react'
const signUpValidationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    lname: Yup.string().required('Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characteristics').required('Password is required'),
    rpassword: Yup.string().oneOf([Yup.ref('password', undefined)], 'password must match').required('repeat password is required')
})
const SignUp = () => {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const { mutate, isLoading } = useMutation({
        mutationKey: ["signup"],
        mutationFn: signUpUser,
        onSuccess: (data) => {
            
            if (email !== "") {
                navigate(`/register-email/${email}`)
            }
        },
        onError: (error) => {
            return (
                toast.error(error.message)
            )
        }
    })

    return (
        <div className='flex items-center h-screen'>
            <div className='border shadow-xl rounded-xl w-[65rem] mx-auto py-4 px-8'>
                <div>
                    <h1 className='text-[3.2rem] mb-4'>Welcome to Crypto App</h1>
                    <p className='text-gray-700 text-[1.6rem]'>Create a free account by filling data below</p>
                </div>

                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{
                        name: "",
                        lname: "",
                        email: "",
                        password: "",
                        rpassword: "",
                        checkbox: false
                    }}
                    onSubmit={(values) => {
                        setEmail(values.email)
                        mutate({
                            firstName: values.name,
                            lastName: values.lname,
                            email: values.email,
                            password: values.password,
                        })
                    }}
                >
                    {() => (
                        <Form>
                            <div className='flex flex-col justify-center gap-8'>
                                <div className='flex justify-between items-center mt-8'>
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor="name" className='text-[1.8rem] font-medium text-gray-700'>First Name</label>
                                        <Field type="text" name="name" id="name" placeholder='Enter First Name' className='border text-[1.6rem] p-2 rounded-lg' />

                                        <div className='text-red-800 text-[1.3rem]'>
                                            <ErrorMessage name="name" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <label htmlFor="lname" className='text-[1.8rem] font-medium text-gray-700'>Last Name</label>
                                        <Field type="text" name="lname" id="name" placeholder='Enter Last Name' className='border text-[1.6rem] p-2 rounded-lg' />

                                        <div className='text-red-800 text-[1.3rem]'>
                                            <ErrorMessage name="lname" />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="email" className='text-[1.8rem] font-medium text-gray-700'>Email</label>
                                    <Field type="text" name="email" id="email" placeholder='Email ....' className='border text-[1.6rem] p-2 rounded-lg' />

                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="password" className='text-[1.8rem] font-medium text-gray-700'>Password</label>
                                    <Field type="password" name="password" id="password" placeholder='Password ....' className='border text-[1.6rem] p-2 rounded-lg' />

                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="rpassword" className='text-[1.8rem] font-medium text-gray-700'>Repeat Password</label>
                                    <Field type="password" name="rpassword" id="rpassword" placeholder='Repeat Password ....' className='border text-[1.6rem] p-2 rounded-lg' />

                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="rpassword" />
                                    </div>
                                </div>

                                <div class="flex items-center mt-10 mb-4">
                                    <label class="flex items-center cursor-pointer relative" for="check-2">
                                        <Field type="checkbox" name="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                                        <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label class="cursor-pointer ml-2 text-slate-600 text-xl" for="check-2">
                                        I agree with <span className="text-purple-700">Terms & Conditions</span>
                                    </label>
                                </div>
                                <Button isLoading={isLoading} txt={"Create Account"} signUp={true} />

                                <div className='text-[1.3rem] text-gray-700 text-center'>
                                    Already have an account? <Link to='/logIn'><span className='text-purple-700 font-medium'>Login</span></Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp