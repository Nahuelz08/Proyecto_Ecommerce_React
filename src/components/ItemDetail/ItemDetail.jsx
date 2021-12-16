import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

function ItemDetail({producto}) {

    return (
        <div key={producto.id} className="container bg-light">
            <div className="row justify-content-center text-center">
                <h3>Item Details</h3>
                <h3 className="fw-bold">{producto.name}</h3>
                <img src={producto.img} className="w-25"></img>
                <h4>${producto.price}</h4>
                <p>{producto.description}</p>
                <ItemCount inicial={1} max={10} />
            </div>
        </div>
    )
}

export default ItemDetail
