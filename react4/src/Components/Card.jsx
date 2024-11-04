import { BASE_URL } from "../App"
import Button from "./Button"
const Card = ({ data: foods }) => {

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
        // <div className="myGrid py-[10vh]">
        //         {foods?.map((item) => (
        //             <div key={item.name}>
        //                 <div className="transparent mt-10 p-10 rounded-xl max-w-[500px] mx-auto">
        //                     <div className="flex justify-between items-center">
        //                         <div className="w-[20rem]">
        //                             <img src={BASE_URL + item.image} alt="images" width={'100%'} />
        //                         </div>
        //                         <div>
        //                             <h1 className="text-4xl font-semibold text-red-700">{item.name}</h1>
        //                             <p className="text-3xl my-3">{item.text}</p>
        //                         </div>
        //                     </div>
        //                     <Button txt={`${item.price.toFixed(2)}`} />
        //                 </div>

        //             </div>
        //         ))}
        //     </div>
    )
}

export default Card
const myGrid=
{
    // display: "grid",
    // grid-template-columns: 'repeat(auto-fit, minmax(500px, 1fr))',
    // gap: '2rem'
 }