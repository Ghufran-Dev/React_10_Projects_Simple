import { useSelector } from "react-redux"
import Button from "./Button"
import { BASE_URL } from "../App"

const Card = () => {
    const foods = useSelector(state => state.foodData.filteredValue)
    return (
        <div className="myGrid">
            {foods?.map(({ name, image, text, price }) => {
                return (
                    <div key={name} className="flex items-center justify-between w-[40rem] gap-2 cardbg">
                        <div className="w-[30rem]">
                            <img src={BASE_URL + image} alt="images" width={'100%'} />
                        </div>
                        <div className="flex flex-col items-end gap-4 text-justify">
                            <div className="">
                                <h2 className="text-[2.5rem] text-white font-medium">{name}</h2>
                                <p className="text-[1.4rem] text-white font-medium">{text}</p>
                            </div>
                            <div>
                            <Button txt={`$ ${price.toFixed(2)}`} />
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Card
