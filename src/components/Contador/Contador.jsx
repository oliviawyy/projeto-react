import { useState } from "react"
import styles from "./Contador.module.css"

function Contador({ numero = 0 }) {


    return (
        <div className={styles.contador}>
            <h1>Esse é o contador!</h1>
            <span className={styles.span}>{numero}</span>
            <div className={styles.botoesContainer}>
                <button className={styles.button}>Aumentar</button>
                <button className={styles.button}>Diminuir</button>
                <button className={styles.button}>reiniciar</button>
            </div>
        </div>
    )
}

export default Contador