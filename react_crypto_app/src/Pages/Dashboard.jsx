// import { useEffect } from "react"
import DashboardLayout from "../Components/DashboardLayout"
import Info from "../Components/Info"
import PortfolioSection from "../Components/PortfolioSection"
import PriceSection from "../Components/PriceSection"
import Transaction from "../Components/Transaction"
// import { fetchExample } from "../Api/query/exampleQuery"
// import { useQuery } from "react-query"
const Dashboard = ({}) => {

  // const exampleQuery = useQuery({
  //   queryKey:["example"],
  //   queryFn:fetchExample
  // })

  // useEffect(() => {
  //   const data =  fetchExample()
  //   console.log("sdjlfjsjl", process.env.REACT_APP_BACKEND_URL);
  //   console.log(data)
  // }, [])
  // if (exampleQuery.isLoading) return <div>Loading ... </div> 
  return (
    <div>
      <DashboardLayout title={"Dashboard"} >
        <PortfolioSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <PriceSection />
          <Transaction />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <Info inverted={true} title={'Loan'} bgImg={bgImg} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat inventore aliquid quas eaque quis pariatur numquam voluptates fugiat quisquam tempore, officia necessitatibus totam maiores excepturi minus sed. Consequatur, quisquam inventore."} />
          <Info title={'Contact'} bgImg={bgImg2} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat inventore aliquid quas eaque quis pariatur numquam voluptates fugiat quisquam tempore, officia necessitatibus totam maiores excepturi minus sed. Consequatur, quisquam inventore."} />
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard
const bgImg = {
  backgroundImage: "url(dot_bg.svg)",
}
const bgImg2 = {
  backgroundImage: "url(grid_bg.svg)",
  backgroundColor: 'white'
}
