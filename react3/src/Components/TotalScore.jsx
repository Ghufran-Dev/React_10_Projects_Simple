
const TotalScore = ({score}) => {
  return (
    <div className="leading-tight">
        <h1 className="text-[7rem] font-semibold text-center">{score}</h1>
        <p className="text-[2.2rem] font-semibold text-nowrap">Total Score</p>
    </div>
  )
}

export default TotalScore