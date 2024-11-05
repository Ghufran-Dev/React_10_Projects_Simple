const Button = ({txt}) => {
    return (
        <div className="text-end">
            <button className="bg-red-700 text-white text-[1.6rem] py-4 rounded-xl w-[8rem] hover:opacity-80">{txt}</button>
        </div>
    )
}

export default Button