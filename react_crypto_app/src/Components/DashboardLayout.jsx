import SideNav from "./SideNav"
import TopNav from "./TopNav"
const DashboardLayout = ({ title, children }) => {
  return (
    <div className="flex items-start">
      <SideNav />
      <div className="flex-grow">
        <TopNav title={title} />

        <div className="container bg-gray-400">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout