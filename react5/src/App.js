import { useEffect } from "react"
import "./App.css"
import Search from "./Components/Search"
import Header from "./Pages/Header"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "./config/firebase"
import { useState } from "react"
import ContactCard from "./Components/ContactCard"
import AddUpdateContact from "./Components/AddUpdateContact"
import useDisclouse from "./hooks/useDisclouse"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [contacts, setContacts] = useState()
  const { onClose, open, isOpen } = useDisclouse()

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        // const contactsSnapShot = await getDocs(contactsRef)
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          // console.log(contactsList);
          setContacts(contactsList);
          return contactsList
        })

      } catch (error) {
        console.log(error);
      }
    }
    getContacts()
  }, [])


  const filterContacts = (e) => {
    try {
      const value = e.target.value
      const contactsRef = collection(db, "contacts")
      onSnapshot(contactsRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })

        const filter = contactsList?.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
        setContacts(filter)
        return filter
      })

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="w-[40rem] mx-auto">
        <Header />
        <Search onClick={isOpen} filterContact={filterContacts}/>
        <div className="">
          {contacts?.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddUpdateContact open={open} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  )
}

export default App