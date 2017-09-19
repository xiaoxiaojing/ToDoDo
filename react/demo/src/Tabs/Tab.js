import React from 'react'

export default function Tab ({
    isChoose,
    onClick,
    title
}) {
    return (
        <button className={`${isChoose ? "choosed": ""}`} onClick={onClick}>{title}</button>
    )
}
