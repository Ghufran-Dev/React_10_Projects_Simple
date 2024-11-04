const Button = ({text, isOutline, ...rest}) => {
  return (
    <>
    <button {...rest} className={`${isOutline?'bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black':'bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent'} text-[1.6rem] sm:text-[2.2rem] px-10 py-4 font-medium rounded-lg transition-all duration-300 ease-linear`}>{text}</button>
    </>
  )
}

export default Button