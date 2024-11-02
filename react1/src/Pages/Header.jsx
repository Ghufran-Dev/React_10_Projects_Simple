import Button from "../Components/Button"

const Header = () => {
    return (
        <div className="shadow-lg">
        <div className="max-w-[90%] mx-auto py-4">
            <nav className="flex justify-between items-center text-[1.2rem] font-medium">
                <div className="w-[4%] min-w-[30px]">
                    <img src="/images/brand_logo.png" alt="logo" width={'100%'} />
                </div>
                <ul className="flex gap-6 items-center">
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <Button text={"Login"}/>
            </nav>
        </div>
        </div>
    )
}

export default Header