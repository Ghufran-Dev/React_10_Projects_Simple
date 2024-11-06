import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from "react-dom"
const Model = ({ open, onClose, children }) => {
  console.log(onClose);

  return createPortal(
    <>
      {open && (
        <>
          <div className="bg-white min-h-[40rem] max-w-[50%] mx-auto p-4 mt-4 rounded-lg relative z-50">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-[3rem]" />
            </div>
            {children}
          </div>
          <div onClick={onClose} className="backdrop-blur h-screen w-screen top-0 absolute z-40" />
        </>
      )}
    </>,
    document.getElementById("model-root")
  )
}

export default Model