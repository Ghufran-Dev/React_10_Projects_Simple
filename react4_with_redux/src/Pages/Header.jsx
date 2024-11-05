import { useSelector, useDispatch } from "react-redux"
import FilterBtns from "../Components/FilterBtns"
import { filteredData } from "../Redux/foodSlice"
const Header = () => {
    const data = useSelector(state => state.foodData.value)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        const filter = data?.filter(food => food.name.toLowerCase().includes(value))
        dispatch(filteredData(filter))
    }

    const filterByType = (type) => {
        if (type === "All"){
          dispatch(filteredData(data))
          return
        }
        const filter = data?.filter(food => food.type.toLowerCase().includes(type.toLowerCase()))
        dispatch(filteredData(filter))
      }

    return (
        <div>
            <div className="bg-rose-950 shadow-lg py-6">
                <div className="container flex justify-between items-center headerCenter">
                    <div className="max-w-[70%] md:max-w-[100%]">
                        <img src="/images/logo.svg" alt="logo" width={'100%'} />
                    </div>
                    <div>
                        <input onChange={handleSearch} type="text" className="text-[1.2rem] p-4 rounded-md bg-transparent text-white font-semibold border border-yellow-100 placeholder-white" name="" id="" placeholder="Search Food..." />
                    </div>
                </div>
                <FilterBtns filterByType={filterByType}/>
            </div>
        </div>
    )
}

export default Header