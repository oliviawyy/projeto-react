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
        console.log("Componente carregado pela primeira vez");
    },[])

    // caso 2: executa sempre q o contador mudar
    useEffect(()=> {
        console.log("O contador foi mudado para:", contador)
    },[contador])

    // caso 3: executa smp q o tema mudar
    useEffect(()=> {
        console.log("Tema Alterado: ", temaEscuro ? "Escuro" : "Claro");
    },[temaEscuro])

    // funcao para aumentar o contador
    function aumentarContador() {
        setContador(contador + 1);
        
    }

    function diminuirContador(){
        setContador(contador - 1);
        
    }

    function alternarTema() {
        setTemaEscuro(!temaEscuro);
        
    }

    return (
        <main 
        className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaEscuro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

        {/* caso 1: Contador */}
        <section className={styles.card}>
            <h1>1. Contador (useState)</h1>
            <p>{contador}</p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={diminuirContador}>-</button>
            <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ela muda</p>

        </section>

        {/* caso 2: campo de texto */}
        <section className={styles.card}>
            <h1>2. Campo de Texto</h1>
            <input 
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <p>Olá, <strong>{nome || "visitante"}</strong>!</p>
        </section>

        {/* caso 3: alternancia de tema */}
        <section className={styles.card}>
        <h1>3. Alternancia de Tema (useState)</h1>
        <button onClick={alternarTema}>Alternar para {temaEscuro ? "Claro" : "Escuro"}</button>
        <p>O useEffect observa a variável <strong>temaEscuro</strong> e executa sempre que o tema é alterado</p>
        </section>
        
        </main>
    )
}

export default Tema