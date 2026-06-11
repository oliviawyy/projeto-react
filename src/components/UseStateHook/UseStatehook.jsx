
import styles from "./UseStateHook.module.css"


function UseStateHook() {

    // inicializar o estado
    const [nome, setNome] = useState('Clique em mudar.');

    // atualizar o estado
    const atualizarNome = () => {
        setNome('Ivo');
    }

    const atualizarIdade = () => {

    }

    const verificarEstado = () => {

    }
 

    return(
        <div>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome}>Mudar</button>

            
        </div>
    )

}


export default UseStateHook