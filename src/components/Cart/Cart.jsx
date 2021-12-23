import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'

function Cart() {

    const {cartList, eliminarItem, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {cartList.map(prod => 
                    <div className="row" key={prod.id}>
                        <div className="col-3">
                            <img src={prod.img} style={{width:150}}></img>
                        </div>
                        <div className="col-3">
                            <h5>{prod.name}</h5>
                        </div>
                        <div className="col-3">
                            <h5>{prod.price}</h5>
                        </div>
                        <div className="col-1">
                            <h5>{prod.cantidad}</h5>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-danger bg-gradient">Eliminar</button>
                        </div>
                    </div>
                    )}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger bg-gradient" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
