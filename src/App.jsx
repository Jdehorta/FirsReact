
import './App.css'
import Card from './componentes/Card'
import ShowHide from './componentes/ShowHide';
import vehicles from './data/vehicles';


function App() {
  const vehiclesList = vehicles.map(v=> {
    return <Card title={v.name} description={v.description}/>
  })
  return <div className='App'>
    <h1>Hola Mundo</h1>
    <div className="container">
    {vehiclesList}
    </div>

    <ShowHide/>
  </div>

   
}

export default App
