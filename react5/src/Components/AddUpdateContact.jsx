import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import Model from "./Model"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { db } from "../config/firebase"
import { toast } from "react-toastify"

const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email('invalid email').required("Email is required"),

})

const AddUpdateContact = ({ open, onClose, isUpdate, contact }) => {

     const addContact = async (con) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, con)
            onClose()
            toast.success("Contact added Successfully")
        } catch (error) {
            console.log(error);
            
        }
     }
     const updateContact = async (con, id) => {
        try {
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, con)
            onClose()
            toast.success("Updated Successfully")
        } catch (error) {
            console.log(error);
            
        }
     }

    return (
        <div>
            <Model open={open} onClose={onClose}>
                <Formik
                validationSchema={contactValidationSchema}
                    initialValues={isUpdate?
                    {
                        name:contact.name,
                        email:contact.email,
                    }:{
                        name: "",
                        email: ""
                    }}
                    onSubmit={values => {
                        isUpdate?
                        updateContact(values, contact.id):
                        addContact(values)
                    }}
                >
                    <Form className="flex flex-col gap-6 justify-center">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[2rem] font-medium">Name</label>
                            <Field name="name" className="border border-black rounded-lg p-4 text-[1.4rem]" />
                            <div className="text-xl text-red-800">
                                <ErrorMessage name='name'/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[2rem] font-medium">Email</label>
                            <Field name="email" className="border border-black rounded-lg p-4 text-[1.4rem]" />
                            <div className="text-xl text-red-800">
                                <ErrorMessage name='email'/>
                            </div>
                        </div>
                        <button className="bg-orange text-[2rem] p-4 rounded-lg self-end mt-2 font-medium" >{isUpdate?"Update":"Add"} Contact</button>
                    </Form>
                </Formik>
            </Model>
        </div>
    )
}

export default AddUpdateContact