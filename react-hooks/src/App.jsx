import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'


function App() {
  return (
    <div className="App">
      <h1>Exercícios de React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/01">Execício 01</Link></li>
          <li> <Link to="/02">Execício 02</Link></li>
          <li> <Link to="/03">Execício 03</Link></li>
          <li> <Link to="/04">Execício 04</Link></li>
          <li> <Link to="/05">Execício 05</Link></li>
          <li> <Link to="/06">Execício 06</Link></li>
        </ul>
        <hr/>
        <Routes>
          <Route path="01" element={<Exercicio01/>}/>
          <Route path="02"/>
          <Route path="03"/>
          <Route path="04"/>
          <Route path="05"/>
          <Route path="06"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
