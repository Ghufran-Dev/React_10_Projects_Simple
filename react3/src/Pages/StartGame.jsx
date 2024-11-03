import Button from "../Components/Button"
const StartGame = ({toggle}) => {
    return (
        <div className='flex justify-evenly items-center text-center h-[100vh]'>
            <div className='max-w-[40%]'>
                <img src="/images/dices.png" alt="dices" width={"100%"} />
            </div>
            <div className='flex flex-col items-end justify-center gap-10'>
                <h1 className='text-[5rem] sm:text-[7rem] font-semibold'>Dice Game</h1>
                <Button text={"Play Game"} onClick={toggle}/>
            </div>
        </div>
    )
}

export default StartGame