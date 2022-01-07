import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const [producto, setProducto] = useState([])

    // useEffect(() => {
    //     getFetch
    //     .then(resp => setProducto(resp.find(prod => prod.id === idProduct)))
    //     .catch(err => console.error(err))
    // }, [idProduct])
    
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', idProduct )
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
    }, [idProduct])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
