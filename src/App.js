import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { FaCartArrowDown } from "react-icons/fa";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
        <BrowserRouter>
        
          <NavBar/>

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Listado de todos los productos"}/>}/> 

            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"productos filtrados"}/>}/> 

            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 

          </Routes>

        </BrowserRouter>
        
    
    </div>
  );
}

export default App;

