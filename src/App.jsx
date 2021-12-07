import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';

function App() {

	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Hola, Bienvenido a NG Games!" />
			<ItemCount inicial={1} max={10} />
		</div>
	);
}

export default App;