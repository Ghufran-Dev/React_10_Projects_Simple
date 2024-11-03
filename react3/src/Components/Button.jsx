const Button = ({text}) => {
  return (
    <>
    <button className="bg-black text-white text-[2.4rem] px-10 py-4 font-medium rounded-lg border border-transparent transition-all duration-300 ease-linear hover:bg-white hover:text-black hover:border-black">{text}</button>
    </>
  )
}

export default Button