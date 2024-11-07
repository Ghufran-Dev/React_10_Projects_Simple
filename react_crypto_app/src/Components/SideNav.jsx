import { IoGrid } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navList = [
    {
      icon: IoGrid,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions"
    }
  ]
  return (
    <div className="text-[2rem] w-[17%] h-screen flex flex-col justify-between shadow-lg shadow-gray-400">
      <div className="flex flex-col gap-6 px-4">
        <h1 className="text-[3rem] text-violet-900 font-medium mt-10 ml-10">@Crypto App</h1>
        {navList?.map((item, i) => (
          <div key={i} className="flex items-center gap-6 text-gray-500 hover:text-black hover:bg-gray-200 px-6 py-4 rounded-lg">
            <item.icon />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 text-gray-500 hover:text-black hover:bg-gray-200 px-6 py-4 rounded-lg mb-4">
        <BiSupport />
        <p>Support</p>
      </div>
    </div>
  )
}

export default SideNav