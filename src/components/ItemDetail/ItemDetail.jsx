import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ItemCount from '../ItemListContainer/ItemCount'
import './ItemDetail.css'

function ItemDetail({producto}) {

    const [irCarrito, setIrCarrito] = useState(false)

    // Agregar al carrito, muestra por consola la cantidad añadida
    const onAdd = (cantidad) => {
        console.log("Agregaste " + cantidad + " al carrito!")
        setIrCarrito(true)
    }

    return (
        <div key={producto.id} className="container mt-5">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 pb-5">  
                    <img src={producto.img} className="itemDetail-img"></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="fw-bold">{producto.name}</h3>
                    <h4>${producto.price}</h4>
                    <p>{producto.description}</p>
                    {!irCarrito ? 
                    <ItemCount inicial={1} max={producto.stock} onAdd={onAdd} /> 
                    : 
                    <div className="d-flex justify-content-center">
                        <Link to={`/cart`}> 
                            <button className="btn btn-danger bg-gradient mt-3">Ir al carrito</button>
                        </Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
