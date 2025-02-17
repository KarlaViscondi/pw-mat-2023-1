import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './style.css'
import Home from './pages/Home'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import Exercicio03 from './exercicios/03'
import Exercicio04 from './exercicios/04'
import Exercicio05 from './exercicios/05'
import Exercicio06 from './exercicios/06'

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
          <Route path="/"   element={<Home/>}/>
          <Route path="01"  element={<Exercicio01/>}/>
          <Route path="02"  element={<Exercicio02/>}/>
          <Route path="03"  element={<Exercicio03/>}/>
          <Route path="04"  element={<Exercicio04/>}/>
          <Route path="05"  element={<Exercicio05/>}/> {/*Dependência: Vanilla tilt */}
          <Route path="06"  element={<Exercicio06/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
