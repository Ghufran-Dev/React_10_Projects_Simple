'use client'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import { ImCross } from "react-icons/im";
import SideNav from './SideNav';
const Drawer = ({open, onClose}) => {
 

  return (
    
      <Dialog open={open} onClose={onClose} className="realtive z-10">
      {/* <Dialog open={open} onClose={setOpen} className=""> */}
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"/>
        {/* <DialogBackdrop transition className="fixed"/> */}
        {/* <div className=""> */}
          <div className="absolute inset-0 overflow-hidden">
          <div className="">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
            {/* <div className="fixed inset-y-0 left-0 flex max-w-full"> */}
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-y-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white text-4xl">
                      <ImCross />
                    </button>
                  </div>
                </TransitionChild>
                <div className="bg-white">
                <SideNav/>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
  )
}

export default Drawer