import React from 'react'
import styles from './Tabs.css'

export default function Tab ({
    isChoose,
    onClick,
    title
}) {
    return (
        <button className={`${isChoose ? styles.choosed: ""}`} onClick={onClick}>{title}</button>
    )
}
