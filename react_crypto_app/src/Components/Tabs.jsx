import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const Tabs = () => {
  return (
    <TabGroup className={"flex justify-end"}>
      <TabList className={"bg-gray-200 flex gap-4 border mt-4 rounded-lg"}>
      {['1H','1D','1W', '1M']?.map((v)=>(
        <Tab key={v} className={'data-[selected]:bg-white p-2 data-[selected]:font-medium'}>{v}</Tab>
      ))}
    
      </TabList>
      {/* <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels> */}
    </TabGroup>
  )
}

export default Tabs