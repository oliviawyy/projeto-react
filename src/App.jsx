
import Alunos from './components/Alunos/Alunos.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Lista from './components/Lista/Lista.jsx'
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx'
import UseStateHook from './components/UseStateHook/UseStatehook.jsx'
import Contador from './components/Contador/Contador.jsx'
import UseEffectHook from './components/UseEffectHook/UseEffectHook.jsx'
import Tema from './components/Tema/Tema.jsx'
import ConsultaApiBtn from './components/ConsultaApiBtn/ConsultaApiBtn.jsx'
import ConsultaApiSa from './components/ConsultaApiBtn/ConsultaApiSa.jsx'




function App() {


  // const objeto =
  // {
  //   id: 1,
  //   nome: 'João'
  // };

  // const styles =
  // {
  //   containerFrutas: 'classe-azul',
  //   'container-legumes': 'classe-verde'
  // };

  return (
    <>
      {/* <Alunos nome={'olivia'} idade={16} ativo={true}></Alunos>
      <Alunos nome={'ana'} idade={17} ativo={false}></Alunos>
      <Button></Button>
      <Card></Card>
      <Lista></Lista>

      <UseStateHook /> */}

      <ConsultaApiSa></ConsultaApiSa>
      

    </>
  )
}
/* <p>Ponto: {objeto.nome}</p>
      <p>Colchetes: {objeto['nome']}</p>

      <p>Ponto: {styles.containerFrutas}</p>
      <p>Colchetes: {styles['container-legumes']}</p> */


export default App
