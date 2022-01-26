import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'
import banner from './../../assets/img/gamingpc.jpg'

function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>
            <img src={banner} className="img-fluid"></img>
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5"><strong>No hay productos en tu carrito</strong></h3>
                        <h4 className="my-5">¿Qué te parece si agregás algunos?</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/">
                            Ir a comprar
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart
