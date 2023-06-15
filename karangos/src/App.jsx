import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TopBar from './components/ui/TopBar';
import theme from './utils/theme'
import {ThemeProvider} from '@mui/material/styles'
import Box from '@mui/material/Box'
import FooterBar from './components/ui/FooterBar';
import Homepage from './pages/Homepage';
import { CssBaseline } from '@mui/material';
import CustomersList from './pages/CustomersList';
import CustomersForm from './pages/CustomersForm';
import CarsList from './pages/CarsList'; {/*Importei CarsList e CarsForm*/}
import CarsForm from './pages/CarsForm';
import Autor from './pages/Autor';

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {/* box cria uma div , sx = estilo extendido*/}
          <Box sx={{
            width: '100vw', 
            minHeight: '100vh', 
            backgroundColor: 'background.default'
            }}> 
            <TopBar/>
            <Box sx={{
              margin: '25px 25px 55px 25px'
              //backgroundColor: 'aqua'
            }}>
              <Routes>
                <Route path='/' element={<Homepage/>}></Route>
                <Route path='/customers' element={<CustomersList/>}></Route>
                <Route path='/customers/new' element={<CustomersForm/>}></Route>
                <Route path='/customers/:id' element={<CustomersForm/>}></Route>
                <Route path='/cars' element={<CarsList/>}></Route> {/*Rotas cars, cars/new e cars/:id adicionadas e apontando para as páginas correspondentes*/}
                <Route path='/cars/new' element={<CarsForm/>}></Route>
                <Route path='/cars/:id' element={<CarsForm/>}></Route>
                <Route path='/autor' element={<Autor/>}></Route>
              </Routes>
            </Box>
            <FooterBar/>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
