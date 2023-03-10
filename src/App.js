import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import { FaCartArrowDown } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a joey`s burgers"} greeting2={"A continuacion podra ver nuestro menù"}/>
    </div>
  );
}

export default App;
