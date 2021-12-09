import React, {useState} from 'react'

function ItemCount({inicial, max}) {

    const [value, setValue] = useState(inicial)

    // Sumar, no permite pasar las 10 unidades
    const btnSumar = () => {
        value < max ?  setValue(value + 1) : console.log("Stock maximo")
    }

    // Restar, no permite llegar a 0 unidades
    const btnRestar = () => {
        value > inicial ?   setValue(value - 1) : console.log("No puedes añadir 0 productos al carrito")
    }

    // Agregar al carrito, muestra por consola la cantidad añadida
    const onAdd = () => {
        console.log("Agregaste " + value + " al carrito!")
        setValue(inicial)
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={btnRestar} className="btn btn-dark">-</button>
                <h3 className="m-3">{value}</h3>
                <button onClick={btnSumar} className="btn btn-dark">+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={onAdd} className="btn btn-primary mt-3">Añadir Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
