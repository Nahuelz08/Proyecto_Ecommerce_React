import {useState, useEffect} from 'react'
import {getFetch} from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, [])



    return (
        <div>
            <h2 className="text-center"> {greeting} </h2>
            <div className="container">
                <div className="row">
                    { loading ? 
                        <h2 className="text-center">Cargando...</h2>
                        :
                        <ItemList productos={productos}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
