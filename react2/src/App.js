import './App.css';
import ContactHeader from './Pages/ContactHeader';
import Header from './Pages/Header';
import ContactForm from './Pages/ContactForm';
import MainImage from './Pages/MainImage';
function App() {
  return (
    <>
      <Header />
      <ContactHeader />
      <div className='grid sm:grid-cols-2 place-items-center '>
        <ContactForm/>
        <MainImage />
      </div>
    </>
  )
}

export default App