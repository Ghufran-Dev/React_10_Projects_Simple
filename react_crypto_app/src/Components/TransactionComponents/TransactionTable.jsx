const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ]
  
  const statusColor = {
    pending:"bg-gray-600",
    processing:"bg-yellow-500",
    cancelled:"bg-red-600",
    completed:"bg-green-600"


  }
  return (
    <div
      className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-10">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-gray-100 bg-gray-100">
              <p className="block font-sans text-2xl antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                ID
              </p>
            </th>
            <th className="p-4 border-b border-gray-100 bg-gray-100">
              <p className="block font-sans text-2xl antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Date & Time
              </p>
            </th>
            <th className="p-4 border-b border-gray-100 bg-gray-100">
              <p className="block font-sans text-2xl antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Type
              </p>
            </th>
            <th className="p-4 border-b border-gray-100 bg-gray-100">
              <p className="block font-sans text-2xl antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Amount
              </p>
            </th>
            <th className="p-4 border-b border-gray-100 bg-gray-100">
              <p className="block font-sans text-2xl antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Status
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((v) => (
            <tr key={v.id} >
              <td className="p-4 border-b border-gray-200">
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.id}</p>
              </td>
              <td className="p-4 border-b border-gray-200">
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.date}</p>
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.time}</p>
              </td>
              <td className="p-4 border-b border-gray-200">
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.type.name}</p>
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.type?.tag}</p>
              </td>
              <td className="p-4 border-b border-gray-200">
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                  {v.amount}</p>
              </td>
              <td className="p-4 border-b border-gray-200">
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                <span className={`${statusColor[v.status]} py-2 px-4 rounded-full text-white`}>
                {v.status}
                </span>
                  </p>
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable