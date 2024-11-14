
const Info = ({inverted, title, text, bgImg}) => {
  return (
    <div className={`${inverted?'bg-violet-800 text-white':'text-black'} 'bg-center bg-cover bg-no-repeat px-6 pt-10 rounded-lg h-[20rem]`} style={bgImg}>
        <h1 className='text-[2rem]'>{title}</h1>
        <p className= 'text-[1.4rem] mt-10'>{text}
        </p>
    </div>

  )
}

export default Info

