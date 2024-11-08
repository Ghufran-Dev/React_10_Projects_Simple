import Drawer from "./Drawer"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
const DashboardLayout = ({ title, children }) => {
  return (
    <div className="flex items-start">
      <SideNav />
      {/* <Drawer/> */}
      <div className="flex-grow bg-gray-300 h-screen">
        <TopNav title={title} />

        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout