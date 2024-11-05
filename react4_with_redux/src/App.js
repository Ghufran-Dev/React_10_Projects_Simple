import "./App.css"
import { useDispatch } from "react-redux"
import { data, filteredData } from "./Redux/foodSlice"
import { useEffect, useState } from "react"
import Header from "./Pages/Header"
import Home from "./Pages/Home"
export const BASE_URL = "http://localhost:9000"
const App = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL)
        if (!res.ok) {
          throw new Error('Unable to fetch data')
        }
        const jsonData = await res.json()
        setLoading(false)
        dispatch(data(jsonData))
        dispatch(filteredData(jsonData))
      } catch (error) {
        setError("Error in fetching data")
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
    {loading && <div className="text-5xl text-red-950 uppercase bg-purple-300">Loading......</div>}
      {error && <div className="text-5xl text-red-900 capitalize">{error}</div>}
      <Header />
      <Home />
    </div>
  )
}

export default App