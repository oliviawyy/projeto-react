
import Alunos from './components/Alunos/Alunos.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Lista from './components/Lista/Lista.jsx'
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx'

function App() {


  const objeto =
  {
    id: 1,
    nome: 'João'
  };

  const styles =
  {
    containerFrutas: 'classe-azul',
    'container-legumes': 'classe-verde'
  };

  return (
    <>
      <Alunos nome={'olivia'} idade={16} ativo={true}></Alunos>
      <Alunos nome={'ana'} idade={17} ativo={false}></Alunos>
      <Button></Button>
      <Card></Card>
      <Lista></Lista>
      <MsgUsuario nomeUsuario={'SENAI'} />
      <MsgUsuario autenticado={true} nomeUsuario={'SENAI'} />

      <p>Ponto: {objeto.nome}</p>
      <p>Colchets</p>

    </>
  )
}

export default App
