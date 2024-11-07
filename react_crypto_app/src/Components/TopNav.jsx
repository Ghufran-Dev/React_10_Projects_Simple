import { useState } from "react"
import { CgProfile } from "react-icons/cg";

const TopNav = ({title}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(pre => !isOpen)
    }
    return (
        <div className="shadow-lg">
            <div className="container text-[2rem] flex justify-between py-10">
                <h1>{title}</h1>

                <button onClick={toggle}>
                   <CgProfile fontSize={'3rem'}/>
                </button>
               {isOpen && <ul
                    role="menu"
                    data-popover="menu"
                    data-popover-placement="bottom"
                    class="absolute right-0 top-32 z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
                >
                    <li
                        role="menuitem"
                        class="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-[1.4rem]"
                    >
                        {`Logout`}
                    </li>
                    <li
                        role="menuitem"
                        class="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 text-[1.4rem]"
                    >
                        {`Support`}
                    </li>
                </ul>}

            </div>
        </div>
    )
}

export default TopNav