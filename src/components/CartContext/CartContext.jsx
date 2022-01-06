import React, { createContext, useState } from 'react'

export const CartContext = createContext([])


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    // const [unidades, setUnidades] = useState(0)

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
        // setUnidades(unidades = cartList.reduce((acc, item) => acc += item.cantidad, 0)) 
    }

    const eliminarItem = (id) => {
        const carritoFiltrado = cartList.filter((item) => item.id !== id)
        setCartList(carritoFiltrado)
        // setUnidades(unidades - 1) 
    }


    function vaciarCarrito(){
        setCartList([])
        // setUnidades(0) 
    }

    // Contador carrito
    const cartCounter = () => {
        return (
            cartList.reduce((prev, prod) => (prev + prod.cantidad), 0)
        )
    }
    // Subtotal compra
    const totalBuy = () => {
        return ( 
            cartList.reduce((prev, prod) => (prev + prod.cantidad * prod.price), 0)
        )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            eliminarItem,
            vaciarCarrito,
            cartCounter,
            totalBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

