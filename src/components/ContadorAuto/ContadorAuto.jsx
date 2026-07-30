import { use, useState, useEffect } from "react"
import styles from "./Contador.module.css"

function Contador(){
    const[num, setNum] = useState(0)

    // novo estadp: controla se o modo automatico esta ligado ou desligado
    const [automatico, setAutomatico] = useState(false);

    

    // efeito q monitora o estado "automatico"
    useEffect(()=> {
        let relogio;

        if (automatico) {
            // se estiver ativo, cria um interalo que aumenta o contador a cada 1 segundo (1000ms)
            relogio = setInterval(()=>{
                // importante; usamos a função de callback (c => c + 1) para prgar sempre o valor mais recente
                setNum ((num) => num + 1);
            }, 1000);
        }

        return () => clearInterval(relogio);
    }, [automatico]);

    const alternarAutomatico = () => {
        setAutomatico(!automatico);
    }

    const addNum = () => {
        setNum(num + 1)
    }

    const subtrairNum = () => {
        setNum(num - 1)
    }

    const resetNum = () => {
        setNum(0)
    }

    const sortearNum = () => {
        setNum(Math.floor(Math.random() * 100) + 1)
    }

    const obterClasse = () => {
        if(num > 0) return styles.spanPositivo
        if(num < 0) return styles.spanNegativo
        return styles.span
    }

    const formatarContador = () => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }

    return(
        <>
        <div className={styles.container}>
            <span className={obterClasse()}>{num}</span>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={addNum}>Adicionar</button>
                <button className={styles.button} onClick={subtrairNum}>Subtrair</button>
                <button className={styles.button} onClick={resetNum}>Reiniciar</button>
                <button className={styles.button} onClick={sortearNum}>Sortear</button>

                <button className={automatico ? styles.buttonAtivo : styles.button} onClick={alternarAutomatico}>{automatico ? 'Parar' : 'Contador'}</button>
            </div>
        </div>

        </>
    )
}

export default Contador