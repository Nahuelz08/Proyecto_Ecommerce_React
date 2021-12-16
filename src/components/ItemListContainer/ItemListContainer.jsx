import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        if (idCategory) {            
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.category === idCategory)))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        }
    }, [idCategory])



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
