const Button = ({text, ...rest}) => {
  return (
    <>
    <button {...rest} className="bg-black text-white text-[1.6rem] sm:text-[2.2rem] px-10 py-4 font-medium rounded-lg border border-transparent transition-all duration-300 ease-linear hover:bg-white hover:text-black hover:border-black">{text}</button>
    </>
  )
}

export default Button