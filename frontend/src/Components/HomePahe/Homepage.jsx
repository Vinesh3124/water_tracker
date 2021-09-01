import React from 'react'
import { Card } from '../Card/Card'
import styles from "./Homepage.module.css"

const Homepage = () => {
    return (
        <div className={styles.mainContainer}>
            <Card />
        </div>
    )
}

export {Homepage}
