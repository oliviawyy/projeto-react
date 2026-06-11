import styles from "./MsgUsuario.module.css"

function MsgUsuario({autenticado=false, nomeUsuario}){
    
    return(autenticado ? <h1 className = {styles.autenticado}>Bem vindo, {nomeUsuario}</h1> :
                    <h1 className ={styles['nao-autenticado']}>Usuário não encontrado.</h1>);


}



//    if (autenticado){

//     return <h1>Bem Vindo, {nomeUsuario}</h1>
//     }

//     return <h1>Usuário não encontrado</h1>


export default MsgUsuario