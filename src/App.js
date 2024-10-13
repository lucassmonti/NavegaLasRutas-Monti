import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='A Comprar!' />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad Agregada', quantity)}/>
    </div>
  );
}

export default App;
