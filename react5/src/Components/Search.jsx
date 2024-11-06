import { FiSearch } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai"
const Search = ({filterContact,...rest}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="relative flex items-center">
        <FiSearch className="text-white text-[2.4rem] absolute ml-4" />
        <input onChange={filterContact} type="text" name="" id="" placeholder="Search..."
          className=" py-4 text-[1.6rem] flex-grow rounded-lg border border-white bg-transparent pl-16 text-white" />
      </div>
      <AiFillPlusCircle {...rest} className="text-5xl text-white cursor-pointer" />
    </div>
  )
}

export default Search