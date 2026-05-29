
import Alunos from './components/Alunos/Alunos.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Lista from './components/Lista/Lista.jsx'


function App() {

  return (
    <>
     <Alunos nome={'olivia'} idade={16} ativo={true}></Alunos>
     <Alunos nome={'ana'} idade={17}  ativo={false}></Alunos>
     <Button></Button>
     <Card></Card>
     <Lista></Lista>
    </>
  )
}

export default App
