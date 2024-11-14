import useDisclosure from "../Custome_hook/useDisclosure";
import Drawer from "./Drawer"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import { FaBars } from 'react-icons/fa';

const DashboardLayout = ({ title, children }) => {
  const {open, onClose, onOpen} = useDisclosure()
  return (
    <div className="myGrid">
    <div className="hidden md:flex">
      <SideNav />
    </div>
      <Drawer open={open} onClose={onClose} />
      <div className="flex-grow bg-gray-300 h-screen">
        <TopNav title={title} icon={<FaBars/>} onOpen={onOpen}/>

        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout