import {useState} from 'react'

const Header = () => {
    let [isNavOpen, setIsNavOpen] = useState(false)
    const handleToggle = () =>{
        setIsNavOpen(!isNavOpen)
    }
    return (
        <>
        {/* <div className='flex justify-between items-center p-1 px-6 shadow-md'>
            <div className="logo text-xl">
                <img src="images/logo.png" alt="logo" />
            </div>
            <ul className='flex gap-5 text-xl'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

 */}

 <div className="flex items-center justify-between border-b border-gray-400 py-1 px-8 shadow-lg">
      <a href="/">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between gap-4">
              <li className="border-b border-gray-400 uppercase">
                <a href="/home">Home</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 text-lg md:flex">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute; 
        width: 30%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
    </div>

</>
        
    )
}

export default Header

// const styles = {
//     color:'green'
// }