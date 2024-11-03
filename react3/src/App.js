import './App.css'
import Button from './Components/Button'

const App = () => {
  return (
    <div className='flex justify-evenly items-center text-center h-[100vh]'>

    <div className ='max-w-[40%]'>
      <img src="/images/dices.png" alt="dices" width={"100%"}/>
    </div>
    <div className='flex flex-col items-end justify-center gap-10'>
      <h1 className='text-[8rem] font-semibold'>Dice Game</h1>
      <Button text={"Play Game"}/>
    </div>
    </div>
  )
}

export default App