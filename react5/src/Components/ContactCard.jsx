import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase"
import AddUpdateContact from "./AddUpdateContact"
import useDisclouse from "../hooks/useDisclouse"
import { toast } from "react-toastify"
const ContactCard = ({ contact }) => {

    const { onClose, open, isOpen } = useDisclouse()

    const delContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id))
            toast.success("Deleted Successfully")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="bg-yellow rounded-lg mt-8 p-6 font-medium flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <HiOutlineUserCircle className="text-[5rem] text-orange" />
                    <div>
                        <h2 className="text-[2.2rem]">{contact.name}</h2>
                        <p className="text-[1.8rem]">{contact.email}</p>
                    </div>
                </div>
                <div className="text-[3rem] flex items-center gap-2">
                    <RiEditCircleLine onClick={isOpen} className="cursor-pointer w-[40%]" />
                    <IoMdTrash onClick={() => delContact(contact.id)} className="text-orange cursor-pointer mb-2" />
                </div>
            </div>

            <AddUpdateContact contact={contact} isUpdate open={open} onClose={onClose} />
        </>
    )
}

export default ContactCard