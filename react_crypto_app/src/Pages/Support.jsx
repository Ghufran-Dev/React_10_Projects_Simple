import DashboardLayout from "../Components/DashboardLayout"
import SupportCard from "../Components/SupportComponents/SupportCard"
import { MdEmail } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import SupportForm from "../Components/SupportComponents/SupportForm";
import Info from "../Components/Info";
const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <SupportCard icon={<MdEmail />} title={"Contact Us"} p={"Have a question or just want to know more? Feel free to reach out to us."} />
        <SupportForm/>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <SupportCard icon={<IoChatbubble />} title={"Live Chat"} p={"Don't have time to wait for the answer? Chat with us now."} />
        <Info title={"Chat bot"} text="You can chat with us anytime" bgImg={bgImg2} />
      </div>
    </DashboardLayout>
  )
}

export default Support
const bgImg2 = {
  backgroundImage: "url(grid_bg.svg)",
  backgroundColor:"#7e22ce",
  color:"white", 
}