import { useState } from "react"
import styles from "./Contador.module.css"

function Contador() {

    const [numero, setNumero] = useState(0)

    const addnum = () => {
        setNumero(numero + 1)
    }

    const subnum = () => {
        setNumero(numero - 1)
    }

    const reinum = () => {
        setNumero(0)
    }

    const sortearnum = () => {
        Math.floor(Math.random() * 100);
    }

    return (
        <div className={styles.contador}>
            <h1>Esse é o contador!</h1>
            <span className={styles.span}>{numero}</span>
            <div className={styles.botoesContainer}>
                <button className={styles.button} onClick={addnum}>Aumentar</button>
                <button className={styles.button} onClick={subnum}>Diminuir</button>
                <button className={styles.button} onClick={reinum}>Reiniciar</button>
                <button className={styles.button} onClick={sortearnum}>Sortear</button>
            </div>
        </div>
    )
}

export default Contador