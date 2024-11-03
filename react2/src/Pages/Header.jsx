import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-1 px-6 shadow-md'>
            <div className="logo text-xl">
                <img src="images/logo.png" alt="logo" />
            </div>
            <ul className='flex gap-5 text-xl'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header

// const styles = {
//     color:'green'
// }