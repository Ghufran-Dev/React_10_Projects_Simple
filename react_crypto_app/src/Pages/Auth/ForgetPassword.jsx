import Button from '../../Components/Button'
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { AiOutlineArrowLeft } from "react-icons/ai"
const forgetValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is Required'),
})
const ForgetPassword = () => {
    return (
        <div className='flex items-center h-screen'>
            <div className='border shadow-xl rounded-xl w-[65rem] mx-auto p-10'>
                <Link to={'/logIn'}>
                    <AiOutlineArrowLeft fontSize={'3rem'} />
                </Link>
                <h1 className='text-[3.2rem] my-4'>Forgot Password</h1>
                <p className='text-gray-700 text-[1.6rem]'>Enter your email to get password</p>

                <Formik
                    validationSchema={forgetValidationSchema}
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {() => (
                        <Form>
                            <div className='flex flex-col justify-center gap-8 mt-6'>

                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="email" className='text-[1.8rem] font-medium text-gray-700'>Email</label>
                                    <Field type="text" name="email" id="email" placeholder='Email ....' className='border text-[1.6rem] p-2 rounded-lg' />
                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <Link to={'/reset-password'}>
                                        <Button txt={"Reset Password"} signIn={true} type={'submit'} />
                                    </Link>
                                </div>


                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ForgetPassword