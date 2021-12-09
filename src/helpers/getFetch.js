import cardImg from '../assets/img/rtx-2070-super.jpg'

const productos = [
    { id: '1', img:cardImg, name:'Nvidia RTX 2070 Super', category:'Placas de Video', price:'150000'},
    { id: '2', img:cardImg, name:'RX 570', category:'Placas de Video', price:'45000'},
    { id: '3', img:cardImg, name:'Nvidia GTX 1080', category:'Placas de Video', price:'85000'},
    { id: '4', img:cardImg, name:'Intel i5 9400f', category:'Procesadores', price:'19500'},
    { id: '5', img:cardImg, name:'Ryzen 5 3600', category:'Procesadores', price:'25000'},
    { id: '6', img:cardImg, name:'Intel i7 9700k', category:'Procesadores', price:'40000'}
]

export const getFetch = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
})