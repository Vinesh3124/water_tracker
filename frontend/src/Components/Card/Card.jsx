import React from 'react'
import styles from "./Card.module.css"
import Panda from "../../Image/Panda.webp"

const Card = () => {

    const [amount, setAmount] = React.useState(0)

    const handleClick = () => {
        setAmount(amount => amount + 30)   
    }

    let date = new Date().toString()
    let num_month = new Date().getMonth() + 1
    let strDate = date.split(" ")
    let day = strDate[0]
    let month = strDate[1]
    let num_day = strDate[2]
    let year = strDate[3]

    let full_str_month = `${day}, ${num_day}-${month}-${year}`
    let full_num_year = `${num_day}/${num_month}/${year}`

    console.log(full_str_month)

    return (
        <div className={styles.cardContainer}>
            <div className={styles.dateContainer}>
                <p>{full_str_month}</p>
            </div>
            <div className={styles.cardImage}>
                <img className={styles.img} src={Panda} alt="profile" />
            </div>
            <div className={styles.amountBox}>
                <h2 className={styles.amountBox_text}>{`₹ ${amount}`}</h2>
            </div>
            <div className={styles.textHead}>
                <p>Did you drink 2L water today?</p>
            </div>
            <div className={styles.btnBox}>
                <button onClick={handleClick}>Yes</button>
                <button>No</button>
            </div>
        </div>
    )
}

export {Card}
