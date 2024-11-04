import { useState } from "react"
import Dice from "../Components/Dice"
import Selectors from "../Components/Selectors"
import TotalScore from "../Components/TotalScore"

const PlayGame = () => {
  const [currentDice, setCurrentDice] = useState(1)
  const [isSelected, setSelected] = useState()
  const [score, setScore] = useState(0)
  const [error, setError] = useState()
  const genRandomNumber = (min, max) => {
    let ranNum = Math.floor(Math.random() * (max - min) + min)
    return ranNum
  }
  const rollDice = () => {
    if (!isSelected) {
      setError("You have not select any number")
      return
    }
    let ranNum = genRandomNumber(1, 7)
    setCurrentDice((pre) => ranNum)

    if (isSelected === ranNum) {
      setScore((pre) => pre + ranNum)
    } else {
      setScore((pre) => pre - 2)
    }
    setSelected(undefined)
  }
  const resetScore = () =>{
    setScore(0)
  }
  return (
    <div className="max-w-[90%] mx-auto mt-10">
      <div className="flex items-center justify-between">
        <TotalScore score={score} />
        <Selectors isSelected={isSelected} setSelected={setSelected} error={error} setError={setError} />
      </div>
      {/* Roll Dice section */}
      <Dice currentDice={currentDice} rollDice={rollDice} resetScore={resetScore}/>
    </div>
  )
}

export default PlayGame