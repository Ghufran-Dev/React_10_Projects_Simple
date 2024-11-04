import { useState } from "react"
import Button from "../Components/Button"
import Rules from "./Rules"
const Dice = ({ currentDice, rollDice, resetScore }) => {
    const [showRules, setShowRules] =useState(false)
    const toggleRules = () =>{
        setShowRules(!showRules)
    }
    return (
        <div className="flex flex-col gap-10 justify-center items-center mt-10">
            <div className="max-w-[30%]" onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" width={"100%"} />
            </div>
            <div className="text-[1.9rem] font-medium">Click on Dice to roll</div>
            <Button text={"Reset Score"} onClick={resetScore} />
            <Button isOutline={true} text={`${showRules?'Hide':'Show'} Rules`} onClick={toggleRules}/>
            {showRules && <Rules />}
        </div>
    )
}

export default Dice
// const para={
//     fontSize:'2.8rem',
// }