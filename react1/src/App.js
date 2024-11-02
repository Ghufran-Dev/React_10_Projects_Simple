import Header from "./Pages/Header"
import Home from "./Pages/Home"
import MainImg from "./Pages/MainImg"
import "./App.css"
const App = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[90%] mx-auto mt-20">
        <div className="flex justify-between items-center">
          <Home />
          <MainImg />
        </div>
      </div>
    </div>
  )
}

export default App