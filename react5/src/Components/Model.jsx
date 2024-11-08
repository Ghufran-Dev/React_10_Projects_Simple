import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from "react-dom"
const Model = ({ open, onClose, children }) => {

  return createPortal(
    <>
      {open && (
          <div className="grid place-items-center backdrop-blur h-screen w-screen top-0 absolute z-40" >
          <div className="bg-white min-h-[40rem] min-w-[50%] mx-auto p-4 rounded-lg relative z-50">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-[3rem]" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  )
}

export default Model