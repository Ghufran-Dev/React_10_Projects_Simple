const FilterBtns = ({ filterByType }) => {
  return (
    <div className="flex gap-10 mt-6 justify-center items-center">
    {btnArr.map((v,i)=>{
        return(
    <button key={i} onClick={()=>filterByType(v)} className="text-white text-[1.2rem] text-center w-[8rem] font-semibold bg-red-700 py-4 px-2 rounded-lg">{v}</button>
        )
    })}
    </div>
  )
}

export default FilterBtns
const btnArr = ["All", "Breakfast", "Lunch", "Dinner"]