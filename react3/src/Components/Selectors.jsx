const Selectors = ({isSelected, setSelected, error, setError}) => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const errorHandle = (value) =>{
        setSelected(value)
        setError("")
    }
    return (
        <div className="text-red-800 text-[2rem]">{error}
            <div className="flex gap-6 sm:gap-10">
                {numbers.map((value, index) => {
                    return (
                        <div key={index} 
                        className={`${value === isSelected?'bg-black text-white':'bg-white text-black'} h-[6rem] w-[6rem] border border-black font-semibold text-[2rem] grid place-items-center rounded-lg`}
                        onClick={() => errorHandle(value)}>
                        {value}</div>
                    )
                })}
            </div>
            <p className="text-[2rem] font-medium text-end mt-4">Select a Number</p>
        </div>
    )
}

export default Selectors