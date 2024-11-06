import { useState } from "react"

const useDisclouse = () => {
    const [open, setOpen] = useState(false)
    const isOpen = () => {
        setOpen(true)
    }
    const onClose = () => {
      setOpen(false)
    }
  return {open, onClose, isOpen}
}

export default useDisclouse