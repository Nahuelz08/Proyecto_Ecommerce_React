import cardImg from '../assets/img/rtx-2070-super.jpg'

const unProducto = { id: '1', img:cardImg, name:'Nvidia RTX 2070 Super', category:'Placas de Video', price:150000, description:'Soy un producto'}

export const getProduct = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(unProducto)
    }, 2000);
})