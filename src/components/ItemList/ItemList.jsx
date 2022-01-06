import { memo } from 'react'
import Item from '../Item/Item';

const ItemList = memo(
    ({productos}) => {
        return (
                <>
                    { productos.map((prod) =>
                                            <Item prod={prod} key={prod.id}/>
                    )}
                </>
        );
    }
)

export default ItemList
