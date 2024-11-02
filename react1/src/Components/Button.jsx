
const Button = ({text}) => {
  return (
    <button className={`${text==="Category"?'bg-transparent text-red-700 border-red-700 hover:bg-red-700 hover:text-white':'bg-red-700'} text-white px-6 py-2 text-[1.6rem] rounded-md border transition duration-500 ease-in hover:bg-transparent hover:text-red-700 hover:border-red-700`}>{text}</button>
  )
}

export default Button