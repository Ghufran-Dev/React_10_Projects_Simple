import FilterBtns from "../Components/FilterBtns"

const Header = ({filteredFood, ...rest}) => {
    return (
        <div>
            <div className=" bg-rose-950 shadow-lg py-6">
                <div className="container flex justify-between items-center headerCenter">
                    <div className="max-w-[70%] md:max-w-[100%]">
                        <img src="/images/logo.svg" alt="logo" width={'100%'} />
                    </div>
                    <div>
                        <input {...rest} type="text" className="text-[1.2rem] p-4 rounded-md bg-transparent text-white font-semibold border border-yellow-100 placeholder-white" name="" id="" placeholder="Search Food..." />
                    </div>
                </div>
                <FilterBtns filteredFood={filteredFood}/>
            </div>
        </div>
    )
}

export default Header