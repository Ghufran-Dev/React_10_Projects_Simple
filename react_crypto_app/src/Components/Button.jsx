import React from 'react'

const Button = ({txt, icon, signUp}) => {
    return (
        <button className={`${signUp?'flex justify-center':''} bg-violet-900 px-6 py-4 rounded-xl text-white text-[1.6rem] border transition duration-500 ease-in-out hover:text-violet-900 hover:bg-transparent hover:border-violet-900 flex items-center gap-4`}>{icon}{txt}</button>
    )
}

export default Button