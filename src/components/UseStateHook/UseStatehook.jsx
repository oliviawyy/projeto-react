
import { useState } from "react";
import styles from "./UseStateHook.module.css"


function UseStateHook() {

    // inicializar o estado
    const [nome, setNome] = useState('Clique em mudar.');
    const [idade, setIdade] = useState(0);
    const [eFalso, seteFalso] = useState(false);
    const [fruta, setFruta] = useState('-------------');

    // atualizar o estado
     const mostrarFruta = () => {
        setFruta('morango!')
    }

    const atualizarNome = () => {
        setNome('Ivo');
    }

    const atualizarIdade = () => {
        setIdade(idade + 1)
    }

    const verificarEstado = () => {
        seteFalso(!eFalso)
    }

    return(
        <div>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome}>Mudar</button>

            <p>Idade: {idade}</p>
            <button onClick={atualizarIdade}>Incrementar</button>

            <p>É falso: {eFalso ? 'NÃO':'SIM'}</p>
            <button onClick={verificarEstado}>Verificar</button>

            <p>Fruta secreta: {fruta}</p>
            <button onClick={mostrarFruta}>Mostrar Fruta secreta</button>
        </div>
    )

}


export default UseStateHook