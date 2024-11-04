import "./App.css"
import Header from "./Pages/Header"
import Home from "./Pages/Home"
import { useEffect } from "react"
import { useState } from "react"
export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [seletedBtn, setSelectedBtn] = useState('All')


  useEffect(() => {
      setLoading(true)
      const fetchApiData = async () => {
          try {
              const response = await fetch(BASE_URL)
              const json = await response.json()
              setData(json)
              setLoading(false)
              setFilteredData(json)
          } catch (error) {
              setError('Unable to fetch data')
          }
      }
      fetchApiData()
  }, [])
const searchFood = (e) =>{
  const searchValue = e.target.value

  if (searchValue === ""){
    setFilteredData(null)
  }

  const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
  setFilteredData(filter)
}

const filteredFood = (type) =>{
  if (type === "All"){
    setFilteredData(data)
    setSelectedBtn("all")
    return
  }
  const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
  setFilteredData(filter)
  setSelectedBtn(type)
}
  return (
    <div>
      <Header onChange={searchFood} filteredFood={filteredFood}/>
      <Home data={filteredData} loading={loading} error={error}/>
    </div>
  )
}

export default App