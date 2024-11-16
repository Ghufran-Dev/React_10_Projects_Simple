import Button from '../../Components/Button'
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useMutation } from 'react-query'
import { signInUser } from '../../Api/query/userQuery'
const signUpValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characteristics').required('Password is required'),
})
const LogIn = () => {

  const {mutate, isLoading} = useMutation({
    mutationKey:["signin"],
    mutationFn: signInUser,
  })

  return (
    <div className='flex items-center h-screen'>
      <div className='border shadow-xl rounded-xl w-[65rem] mx-auto py-4 px-8'>
        <div>
          <h1 className='text-[3.2rem] mb-4'>Welcome to Crypto App</h1>
          <p className='text-gray-700 text-[1.6rem]'>Enter your credentials to access the account</p>
        </div>

        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            // console.log(values)
            mutate({
              email: values.email,
              password: values.password
            })
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

                <div className='flex flex-col gap-4'>
                  <label htmlFor="password" className='text-[1.8rem] font-medium text-gray-700'>Password</label>
                  <Field type="password" name="password" id="password" placeholder='Password ....' className='border text-[1.6rem] p-2 rounded-lg' />
                  <div className='text-red-800 text-[1.3rem]'>
                    <ErrorMessage name="password" />
                  </div>
                </div>


                <div class="flex justify-between items-center mt-10 mb-4">
                  <div className='flex items-center'>

                    <label class="flex items-center cursor-pointer relative" for="check-2">
                      <Field type="checkbox" name="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                      <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>

                    <label class="cursor-pointer ml-2 text-gray-700 text-xl" for="check-2">
                      Remember me
                    </label>
                  </div>
                  <div className="text-purple-700 text-xl font-medium">Forget Password?</div>
                </div>
                <Button isLoading={isLoading} txt={"Log in"} signUp={true} type={'submit'} />
                <Link to={'/signUp'}>
                  <Button txt={"Create New Account"} signIn={true} />
                </Link>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default LogIn