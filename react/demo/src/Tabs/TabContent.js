import React from 'react'

export default function TabContent ({
    isShow,
    children
}) {
    return (
        <div style={{display: isShow ? "block" : "none"}}>{children}</div>
    )
}
