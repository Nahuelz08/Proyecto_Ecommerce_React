import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import './CartList.css'

const CartList = () => {

    const { cartList, totalBuy, removeItem, emptyCart } = useContext(CartContext)

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center text-center">
                <div className="col-lg-3 col-sm-3"></div>
                <h5 className="col-lg-3 col-sm-3">Nombre:</h5>
                <h5 className="col-lg-2 col-sm-2">Precio:</h5>
                <h5 className="col-lg-1 col-sm-1">Cantidad:</h5>
                <h5 className="col-lg-2 col-sm-2">Total:</h5>
                <div className="col-lg-1 col-sm-1"></div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {cartList.map(prod => 
                    <div className="row align-items-center" key={prod.id}>
                        <div className="col-lg-3 col-sm-3">
                            <img src={prod.img} style={{width:150}}></img>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h5>{prod.name}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${prod.price}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <h5>{prod.quantity}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${prod.quantity * prod.price}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <button className="btn btn-danger bg-gradient" onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </div>
                        <hr></hr>
                    </div>
                )}
                <h3><b>Precio Total:</b></h3>
                <h4 className="text-center"><b>${totalBuy()}</b></h4>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn btn-danger bg-gradient me-3" onClick={emptyCart}>Vaciar Carrito</button>
                    <Link to="/checkout">
                        <button className="btn btn-danger bg-gradient ms-3">Procesar Compra</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartList
