import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css"

// function UseEffectHook(){
    

// }

function UseEffectHook (){

    const [contar, setContar] = useState(0);

    const titulo = 'Clicou '

    console.log('Sempre ocorre, mas antes do UseEffect')

    useEffect(() =>{
        console.log('Ocorre quando renderizar.')
    });

    useEffect(() =>{
        console.log('Ocorre quando renderizar a primeira vez.')
    },[contar]);

    useEffect(() =>{
        console.log('Ocorre quando renderizar o Contar')
    },[contar]);

    useEffect(()=>{
        document.title = titulo + contar
    }, [contar]);


    function adicionar(){
        setContar(Contar + 1)
    }

    return <button
            className={styles.contadorButton}
            onClick={() => setContar(contar + 1)}>
            {contar}
            </button>
}

export default UseEffectHook