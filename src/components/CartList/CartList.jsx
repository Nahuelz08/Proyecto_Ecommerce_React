import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const CartList = () => {

    const { cartList, totalBuy, eliminarItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center text-center">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-3">
                        <h5>Nombre:</h5>
                    </div>
                    <div className="col-2">
                        <h5>Precio:</h5>
                    </div>
                    <div className="col-1">
                        <h5>Cantidad:</h5>
                    </div>
                    <div className="col-2">
                        <h5>Total:</h5>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {cartList.map(prod => 
                <div className="row align-items-center" key={prod.id}>
                    <div className="col-3">
                        <img src={prod.img} style={{width:150}}></img>
                    </div>
                    <div className="col-3">
                        <h5>{prod.name}</h5>
                    </div>
                    <div className="col-2">
                        <h5>${prod.price}</h5>
                    </div>
                    <div className="col-1">
                        <h5>{prod.cantidad}</h5>
                    </div>
                    <div className="col-2">
                        <h5>${prod.cantidad * prod.price}</h5>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-danger bg-gradient" onClick={() => eliminarItem(prod.id)}>Eliminar</button>
                    </div>
                    <hr></hr>
                </div>
                )}
                <h3><b>Precio Total:</b></h3>
                <h4 className="text-center"><b>${totalBuy()}</b></h4>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn btn-danger bg-gradient me-3" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/checkout">
                        <button className="btn btn-danger bg-gradient ms-3">Procesar Compra</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartList
