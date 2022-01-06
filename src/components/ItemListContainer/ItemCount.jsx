import React, {useState} from 'react'

function ItemCount({inicial, max, onAdd}) {

    const [value, setValue] = useState(inicial)

    // Sumar, no permite pasar las unidades de stock
    const btnSumar = () => {
        value < max ?  setValue(value + 1) : console.log("Stock maximo")
    }

    // Restar, no permite llegar a 0 unidades
    const btnRestar = () => {
        value > inicial ?   setValue(value - 1) : console.log("No puedes añadir 0 productos al carrito")
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={btnRestar} className="btn btn-dark">-</button>
                <h3 className="m-3">{value}</h3>
                <button onClick={btnSumar} className="btn btn-dark">+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=> onAdd(value)} className="btn btn-danger bg-gradient mt-3">Añadir Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
