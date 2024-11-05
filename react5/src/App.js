import { useEffect } from "react"
import "./App.css"
import Search from "./Components/Search"
import Header from "./Pages/Header"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./config/firebase"
import { useState } from "react"
const App = () => {
  const [contacts, setContacts] = useState()
  useEffect(()=>{
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        const contactsSnapShot = await getDocs(contactsRef)
        const contactsList = contactsSnapShot.docs.map((doc)=>{
          return {
            id:doc.id,
            ...doc.data()}})
        setContacts(contactsList);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getContacts()
  },[])

  return (
    <div className="w-[40rem] mx-auto">
      <Header/>
      <Search/>
      <div className="">
        {contacts?.map(contact =>(
          <div key={contact.id} className="bg-yellow rounded-lg mt-8 p-6 font-medium ">
            <div>
              <h2 className="text-[2.2rem]">{contact.name}</h2>
              <p className="text-[1.8rem] mt-2">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App