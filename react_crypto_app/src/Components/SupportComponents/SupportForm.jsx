import { ErrorMessage, Field, Formik, Form } from "formik"
import * as Yup from "yup"

const contactValidationSchema = Yup.object().shape({
    fname: Yup.string().required("Name is required"),
    lname: Yup.string().required("Name is required"),
    email: Yup.string().email('invalid email').required("Email is required")
})

const SupportForm = () => {
    return (
        <div>
            <div class="flex flex-col rounded-xl bg-white px-6 py-8 gap-8">
                <p class="text-slate-500 font-medium text-2xl">
                    You will receive response within 24 hours of time of submit.
                </p>
                <Formik
                    validationSchema={contactValidationSchema}
                    initialValues={
                        {
                            fname: "",
                            lname: "",
                            email: ""
                        }
                    }
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    <Form class="">
                        <div class="flex flex-col gap-10">

                            <div className="flex justify-between items-center">
                                <div class="w-full max-w-sm">
                                    <label class="block mb-2 text-xl text-slate-600 font-semibold">
                                        First Name
                                    </label>
                                    <Field type="text" name="fname" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-xl border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                                    <div className="text-xl text-red-800">
                                        <ErrorMessage name='fname' />
                                    </div>
                                </div>
                                <div class="w-full max-w-sm">
                                    <label class="block mb-2 text-xl text-slate-600 font-semibold">
                                        Last Name
                                    </label>
                                    <Field type="text" name="lname" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-xl border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                                    <div className="text-xl text-red-800">
                                        <ErrorMessage name='lname' />
                                    </div>
                                </div>
                            </div>

                            <div class="w-full max-w-sm">
                                <label class="block mb-2 text-xl text-slate-600 font-semibold">
                                    Email
                                </label>
                                <Field type="text" name="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-xl border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="name@gmail.com" />
                                <div className="text-xl text-red-800">
                                    <ErrorMessage name='email' />
                                </div>
                            </div>
                            <div class="w-full flex flex-col">
                                <label class="block mb-2 text-xl text-slate-600 font-semibold">
                                    Message
                                </label>
                                <textarea name="textarea" id="" rows={10} placeholder="Your Message" className="border text-xl"></textarea>
                            </div>
                        </div>
                        <div class="inline-flex items-center mt-10 mb-6">
                            <label class="flex items-center cursor-pointer relative" for="check-2">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
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
                        <button  class="mt-4 w-full rounded-md bg-purple-700 py-2 px-4 border border-transparent text-center text-xl text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Send Message
                        </button>
                        <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-xl text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Book Meeting
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default SupportForm