
import './App.css'
import Card from './componentes/Card'

function App() {
  return <div className='App'>
    <h1>Hola Mundo</h1>
    <div className="container">
    <Card title="Aqui Titulo" 
    description="la descripcion es aqui"/>
    <Card title="Aqui Titulo2" 
    description="la descripcion es aqui2"/>
    <Card title="Aqui Titulo3" 
    description="la descripcion es aqui3"/>
    <Card />
    </div>
  </div>
   
}

export default App
