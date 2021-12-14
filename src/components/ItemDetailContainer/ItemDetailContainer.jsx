import {useState, useEffect} from 'react'
import { getProduct } from '../../helpers/getProduct'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProduct
        .then(resp => setProducto(resp))
        .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
