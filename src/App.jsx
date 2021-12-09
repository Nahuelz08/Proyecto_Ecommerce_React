import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Hola, Bienvenido a NG Games!" />
		</div>
	);
}

export default App;