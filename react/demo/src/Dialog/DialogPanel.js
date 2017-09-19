import React from 'react'
import './Dialog.css'

export default function DialogPanel ({
    isOpen,
    onClose,
    children
}) {
    return (
        <div className="mask" onClick={onClose} style={{display: isOpen ? "block" : "none"}}>
            <div className="content" style={{display: isOpen ? "block" : "none"}}>
                {children}
            </div>
        </div>
    )
}
