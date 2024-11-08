import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const Tabs = () => {
  return (
    <TabGroup>
      <TabList className={"bg-transparent flex justify-end gap-4 px-2 mt-4"}>
        <Tab className={"bg-gray-300 p-2 rounded-lg"}>1H</Tab>
        <Tab className={"bg-gray-300 p-2 rounded-lg font-semibold"}>1D</Tab>
        <Tab className={"bg-gray-300 p-2 rounded-lg"}>1W</Tab>
        <Tab className={"bg-gray-300 p-2 rounded-lg"}>1M</Tab>
      </TabList>
    </TabGroup>
  )
}

export default Tabs