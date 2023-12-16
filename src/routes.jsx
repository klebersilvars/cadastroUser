import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Visualizacao from './components/Visualizacao/Visualizacao';

const Rotas = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/visualizacao' element={<Visualizacao/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas;