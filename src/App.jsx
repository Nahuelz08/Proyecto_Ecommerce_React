import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Hola, Bienvenido a NG Games!" />
			<ItemDetailContainer />
		</div>
	);
}

export default App;