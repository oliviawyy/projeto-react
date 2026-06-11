import styles from "./MsgUsuario.module.css"

function MsgUsuario({autenticado=false, nomeUsuario}){
    
    // return(autenticado ? <h1 className = {styles.autenticado}>Bem vindo, {nomeUsuario}</h1> :
    //                 <h1 className ={styles.naoAutenticado}>Usuário não encontrado.</h1>);

    const msgAutenticado =  <h1 className = {styles.autenticado}>Bem vindo, {nomeUsuario}</h1>;
    const msgNautenticado =  <h1 className ={styles.naoAutenticado}>Usuário não encontrado.</h1>;

    return(autenticado ? msgAutenticado : msgNautenticado)



}



//    if (autenticado){

//     return <h1>Bem Vindo, {nomeUsuario}</h1>
//     }

//     return <h1>Usuário não encontrado</h1>


export default MsgUsuario