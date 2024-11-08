import { FaDove, FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go";
import Button from "./Button";
const PriceSection = () => {
    const timeStamp = ["7:15 PM", "8:55 PM", "9:45 PM", "1:15 AM", "4:55 AM"]
    return (
        <div className="bg-white px-10 py-6 rounded-lg">

            <div className=" flex items-center justify-between">
                <div>
                    <h1 className="text-[1.6rem] text-gray-500 font-semibold mb-4">Current Price</h1>
                    <div className="flex gap-4 items-center">
                        <p className="text-[2rem] font-medium ">PK 26,670.25</p>
                        <GoArrowUpRight fontSize={"2rem"} className="text-green-700" />
                        <p className="text-[1.4rem] text-green-700">0.04%</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button txt={"Buy"} icon={<FaPlusCircle />} />
                    <Button txt={"Sell"} icon={<FaMinusCircle />
                    } />
                </div>
            </div>

            <div>
                <img src="/graph.svg" alt="graph" width={'100%'} />
            </div>

            <div className="flex items-center justify-between text-gray-500 mt-4">
                {timeStamp?.map((time, i) => (
                    <div key={i} className="text-[1.4rem]">{time}</div>
                ))}
            </div>

        </div>
    )
}

export default PriceSection