import React from 'react'

const Button = ({isMailBtn, txt, icon, ...rest}) => {
  return (
    <>
        <button {...rest} className=
        {`py-3 px-2 w-[100%] rounded-md uppercase flex items-center justify-center gap-4 text-nowrap ${isMailBtn ? 'bg-white text-black border-2 border-black' :'bg-black text-white'}`}>{icon}{txt}</button>
    </>
  )
}

export default Button