import Button from '../../Components/Button'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
const resetValidationSchema = Yup.object({
    password: Yup.string().min(6, 'Password must be at least 6 characteristics').required('Password is required'),
    rpassword: Yup.string().oneOf([Yup.ref('password', undefined)], 'password must match').required('repeat password is required')
})
const ResetPassword = () => {
    return (
        <div className='flex items-center h-screen'>
            <div className='border shadow-xl rounded-xl w-[65rem] mx-auto py-4 px-8'>
                    <h1 className='text-[3.2rem] mb-4'>Reset Password</h1>
                    <p className='text-gray-700 text-[1.6rem]'>Enter new password</p>

                <Formik
                    validationSchema={resetValidationSchema}
                    initialValues={{
                        password: "",
                        rpassword: "",
                        checkbox: false
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {() => (
                        <Form>
                            <div className='flex flex-col justify-center gap-8 mt-8'>
                                   
                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="password" className='text-[1.8rem] font-medium text-gray-700'>New Password</label>
                                    <Field type="password" name="password" id="password" placeholder='Password ....' className='border text-[1.6rem] p-2 rounded-lg' />
                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label htmlFor="rpassword" className='text-[1.8rem] font-medium text-gray-700'>New Repeat Password</label>
                                    <Field type="password" name="rpassword" id="rpassword" placeholder='Repeat Password ....' className='border text-[1.6rem] p-2 rounded-lg' />
                                    <div className='text-red-800 text-[1.3rem]'>
                                        <ErrorMessage name="rpassword" />
                                    </div>
                                </div>

                                <Button txt={"Reset Password"} signUp={true} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassword
