import { Fragment } from "react";
import { FaRupeeSign, FaBtc } from "react-icons/fa6";
const Transaction = () => {
    const transaction = [
        {
            id: '1',
            icon: FaRupeeSign,
            text: "PK Deposit",
            timestamp: "2022-06-09 7:06 PM",
            amount: "+pk81,123.10"
        },
        {
            id: '2',
            icon: FaBtc,
            text: "PK Deposit",
            timestamp: "2022-06-09 7:06 PM",
            amount: "-12.12309303 BTC"
        },
        {
            id: '3',
            icon: FaRupeeSign,
            text: "PK Deposit",
            timestamp: "2022-06-09 7:06 PM",
            amount: "+pk81,123.10"
        },
        {
            id: '3',
            icon: FaRupeeSign,
            text: "PK Deposit",
            timestamp: "2022-06-09 7:06 PM",
            amount: "+pk81,123.10"
        }
    ]
    return (
        <div className='bg-white px-10 py-6 rounded-lg'>
            <h1 className='text-[1.6rem] text-gray-500 font-semibold'>Recent Transactions</h1>
            <div className="flex justify-between flex-col h-[100%] py-6">
                {transaction?.map((v, i) => (
                    <Fragment>
                        {i !== 0 && <hr />}

                        <div key={i} className="flex justify-between">
                            <div className="flex">
                                <div>
                                    <div className="bg-gray-200 p-4 rounded-full justify-between"><v.icon /></div>
                                </div>
                                <div className="ml-10">
                                    <h1 className="text-[1.6rem] text-gray-950">{v.text}</h1>
                                    <p className="text-[1.2rem] text-gray-500">{v.timestamp}</p>
                                </div>
                            </div>

                            <div className="text-[1.6rem]">
                                {v.amount}
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Transaction