import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/img/logo.png'
import CartWidget from '../Cart/CartWidget'
import '../Cart/Cart.css'

const NavBar = ({cartCount}) => {
	return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="NGGames Logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Link className="cart-mobile" style={{paddingRight:'2rem'}} to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="align-items-center">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/placas-de-video">
                                Placas de Video
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/procesadores">
                                Procesadores
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;
