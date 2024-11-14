import Button from "../Components/Button"
import DashboardLayout from "../Components/DashboardLayout"
import { FaDownload } from "react-icons/fa";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TransactionTable from "../Components/TransactionComponents/TransactionTable"
import { FaSearch } from "react-icons/fa";
const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 349
    },
    {
      name: "Deposit",
      count: 114
    },
    {
      name: "Withdraw",
      count: 55
    },
    {
      name: "Trade",
      count: 50
    },
  ]
  return (
    <DashboardLayout title={"Transactions"}>
      <div className="flex justify-end my-6">
        <Button txt={"Export CSV"} icon={<FaDownload />} />
      </div>
      <div className="bg-white rounded-lg p-6 ">
        <TabGroup >
          <TabList className={`flex flex-col sm:flex-row gap-6 justify-between items-center `}>
            <div className="flex gap-14 pl-2">
              {tabs?.map(v => (
                <Tab key={v.name} className="flex gap-4 text-gray-600 text-[1.6rem] items-center">{v.name}
                  <div className="bg-gray-200 rounded-full p-2 text-[1.2rem]">{v.count}</div>
                </Tab>
              ))}
            </div>

            <div class=" max-w-[20rem] relative flex justify-end">

              <div class="relative ">
                <input type="text" class="bg-transparent placeholder:text-slate-400 placeholder:pl-2 text-slate-700 text-xl border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search by id"/>
                <button class="absolute left-1 top-1.5 rounded bg-slate-800 p-1.5 border border-transparent text-center text-xl text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <FaSearch />
                </button>
              </div>
            </div>

          </TabList>
          <TabPanels>
            <TabPanel><TransactionTable /></TabPanel>
            <TabPanel>render component of Deposit Tabl</TabPanel>
            <TabPanel>Content 3</TabPanel>
            <TabPanel>Content 4</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </DashboardLayout>
  )
}

export default Transactions