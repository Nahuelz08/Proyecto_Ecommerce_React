import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'

function App() {

	return (
		<CartContextProvider>
			<BrowserRouter>
				<div className="App">
					<NavBar />
					<Routes>
						<Route
							exact
							path="/"
							element={<ItemListContainer greeting="Hola, Bienvenido a NG Games!" />}
						/>
						<Route
							exact 
							path="/categoria/:idCategory"
							element={<ItemListContainer greeting="Hola, Bienvenido a NG Games!" />}
						/>
						<Route
							exact 
							path="/detalle/:idProduct"
							element={<ItemDetailContainer />}
						/>
						<Route
							exact 
							path="/cart"
							element={<Cart />}
						/>	
					</Routes>
				</div>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;