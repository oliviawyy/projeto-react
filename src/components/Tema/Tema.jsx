import { useState, useEffect } from "react";
import styles from "./Tema.module.css"

function Tema() {
    // casos de uso do useState

    const [contador, setContador] = useState(0);

    const [nome, setNome] = useState("");

    const [temaEscuro, setTemaEscuro] = useState(false)

    // casos de uso do useEffect

    // caso 1: executa apenas uma vez, ao carregar o componente
    useEffect(()=> {

    },[])

    // caso 2: executa sempre q o contador mudar
    useEffect(()=> {

    },[contador])

    // caso 3: executa smp q o tema mudar
    useEffect(()=> {

    },[temaEscuro])

    // funcao para aumentar o contador
    function aumentarContador() {
        setContador(contador + 1)
    }

    function diminuirContador(){
        setContador(contador - 1)
    }

    function alternarTema() {

    }

    return (
        <main 
        className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaEscuro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

        {/* caso 1: Contador */}
        <section className={styles.card}>

        </section>

        {/* caso 2: campo de texto */}
        <section className={styles.card}>

        </section>

        {/* caso 3: alternancia de tema */}
        <section className={styles.card}>

        </section>
        
        </main>
    )
}