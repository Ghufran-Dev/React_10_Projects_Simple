import DashboardLayout from "../Components/DashboardLayout"
import PortfolioSection from "../Components/PortfolioSection"
import PriceSection from "../Components/PriceSection"
const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title={"Dashboard"} >
        <PortfolioSection/>
        <PriceSection/>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard