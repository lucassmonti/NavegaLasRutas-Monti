
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='A Comprar!' />
    </div>
  );
}

export default App;
