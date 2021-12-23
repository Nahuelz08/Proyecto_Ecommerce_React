import React, { createContext, useState } from 'react'

export const CartContext = createContext([])


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item){

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + oldItem}])
        } else {
            setCartList([...cartList, item])
        }
        console.log(cartList)
    }

    // function eliminarItem(item) {
            
    //     }
    // }

    function vaciarCarrito(){
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            // eliminarItem,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

