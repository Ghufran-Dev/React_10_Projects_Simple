import { IoGrid } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <div className="text-[2rem] h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-6 px-4">
        <h1 className="text-[3rem] text-violet-900 font-medium mt-10 ml-10 text-nowrap">@Crypto App</h1>
        {navList?.map((item, i) => (
          <Link key={i} to={item.link}>
            <div className="flex items-center gap-6 text-gray-500 hover:text-black hover:bg-gray-200 px-6 py-4 rounded-lg">
              <item.icon />
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/support">
        <div className="flex items-center gap-6 text-gray-500 hover:text-black hover:bg-gray-200 px-6 py-4 rounded-lg mb-4">
          <BiSupport />
          <p>Support</p>
        </div>
      </Link>
    </div>
  )
}

export default SideNav