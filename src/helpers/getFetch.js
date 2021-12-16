import cardImgRtx2070 from '../assets/img/rtx-2070-super.jpg'
import cardImgRx570 from '../assets/img/rx-570.jpg'
import cardImgGtx1080 from '../assets/img/gtx-1080.jpg'
import cardImgI59400F from '../assets/img/i5-9400f.jpg'
import cardImgRyzen5 from '../assets/img/ryzen5-3600.jpg'
import cardImgI79700K from '../assets/img/i7-9700k.jpg'

const productos = [
    { id: '1', img:cardImgRtx2070, name:'Nvidia RTX 2070 Super', category:'placas-de-video', price:150000, description:'NVIDIA® GeForce® RTX 2070 SUPER™ esta impulsada por la galardonada arquitectura NVIDIA Turing™  y tiene una GPU súper rápida con más núcleos y relojes más rápidos para liberar tu productividad creativa y el dominio de los juegos. Es hora de equiparte y obtener superpoderes.'},
    { id: '2', img:cardImgRx570, name:'RX 570', category:'placas-de-video', price:45000, description:'La placa de video Asus Radeon RX 570 está diseñada para soportar con eficiencia todo tipo de requerimientos gráficos. Su sistema Dual-ball Bearing 0dB Fans funciona de forma suave y consigue reducir la fricción, lo que extiende la vida útil de la tarjeta y la eficiencia de enfriamiento. Por otro lado, los ventiladores con certificación IP5X son resistentes al polvo.'},
    { id: '3', img:cardImgGtx1080, name:'Nvidia GTX 1080', category:'placas-de-video', price:85000, description:'GeForce GTX 1080, es la tarjeta gráfica más avanzada para juegos del planeta. Descubre el rendimiento para juegos sin precedente, la eficiencia de energía y la experiencia de juego basado en la nueva tecnología de la arquitectura NVIDIA Pascal™. Esta es la plataforma definitiva para juegos.'},
    { id: '4', img:cardImgI59400F, name:'Intel i5 9400f', category:'procesadores', price:19500, description:'El procesador Intel® Core ™ de 9ª generación lleva el rendimiento de las PC de escritorio a un nivel completamente nuevo. Presentamos la generación más poderosa de procesadores de escritorio Intel® Core ™. Ya sea que sea un jugador que busca una experiencia fantástica en el juego con el margen de rendimiento para una transmisión en vivo sin problemas y una grabación sin interrupciones, o es un creador que está listo para crear y compartir más, menos tiempo de espera, esta nueva generación de procesadores es Listo para llevarte a ese nuevo nivel.'},
    { id: '5', img:cardImgRyzen5, name:'Ryzen 5 3600', category:'procesadores', price:25000, description:'La nueva generación de procesadores Ryzen de AMD está fabricada bajo tecnología de 7 nanómetros. La eficiencia en consumo y rendimiento óptimas para tu configuración destinada a juegos. '},
    { id: '6', img:cardImgI79700K, name:'Intel i7 9700k', category:'procesadores', price:40000, description:'El procesador Intel® Core ™ de 9ª generación lleva el rendimiento de las PC de escritorio a un nivel completamente nuevo. Presentamos la generación más poderosa de procesadores de escritorio Intel® Core ™. Ya sea que sea un jugador que busca una experiencia fantástica en el juego con el margen de rendimiento para una transmisión en vivo sin problemas y una grabación sin interrupciones, o es un creador que está listo para crear y compartir más, menos tiempo de espera, esta nueva generación de procesadores es Listo para llevarte a ese nuevo nivel.'}
]

export const getFetch = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
})