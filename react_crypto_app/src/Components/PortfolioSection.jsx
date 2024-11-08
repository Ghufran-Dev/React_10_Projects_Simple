import { FaInfoCircle } from "react-icons/fa";
import Button from "./Button";
import { LuArrowUpFromLine, LuArrowDownFromLine } from "react-icons/lu";
const PortfolioSection = () => {
    return (
<div className="flex res bg-white rounded-lg mt-10 p-6 items-center justify-between">

        <div className="flex items-center gap-10 sm:gap-20">
            <div className="flex flex-col gap-4">
                <div className='text-gray-500 flex gap-2 items-center text-[1.4rem]'>
                    <h3 className="font-semibold">Total Portfolio Value</h3>
                    <FaInfoCircle/>
                </div>
                    <p className="text-[2rem] font-medium">PK 112,312,24</p>
            </div>

            <div className="flex flex-col gap-4">
                    <h3 className="text-gray-500 text-[1.4rem] font-semibold">Wallet Balances </h3>
                <div className=' flex gap-2 items-center'>
                    <p className="text-[2rem] font-medium">22.29401000</p>
                    <span className="bg-gray-500 text-white text-[1rem] p-2 rounded-full">BTC</span>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                    <h3 className="text-[1.4rem] text-white">Wallet Balances </h3>
                <div className=' flex gap-2 items-center'>
                    <p className="text-[2rem] font-medium">PK 1300</p>
                    <span className="bg-gray-500 text-white text-[1rem] p-2 rounded-full">BTC</span>
                </div>
            </div>
        </div>

<div className="flex gap-4">
<Button txt={"Deposit"} icon={<LuArrowDownFromLine/>}/>
<Button txt={"Withdraw"} icon={<LuArrowUpFromLine/>}/>

</div>
</div>
    
    )
}

export default PortfolioSection