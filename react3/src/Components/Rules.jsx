const Rules = () => {
  return (
    <div className="bg-red-200 p-4 rounded-lg">
        <h1 className="text-[2rem] font-semibold">How to play dice game</h1>
        <ul className="text-[1.3rem]">
            <li>Select any number</li>
            <li>Click on dice Image</li>
            <li>After click on dice if selected number equal to dice number <br/>you will get same point as dice</li>
            <li>If you get wrong guess then 2 point will be deducted</li>
        </ul>
    </div>
  )
}

export default Rules