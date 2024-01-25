const productos = [
    {id: "1", nombre: "Yerba", precio: 500, img: "./public/img/yerba.jpg", idCat: "2"},
    {id: "2", nombre: "Fideos", precio: 800, img: "./public/img/fideos.jpg", idCat: "2"},
    {id: "3", nombre: "Terma", precio: 400, img: "./public/img/terma.jpg", idCat: "3"},
    {id: "4", nombre: "Guardabarro Ford Falcon", precio: 2500, img: "./public/img/guardabarro de falcon.webp", idCat: "3"},
    {id: "5", nombre: "Aceite", precio: 200, img: "./public/img/aceite.jpg", idCat: "3"},
    {id: "6", nombre: "Tomate", precio: 230, img: "./public/img/tomate.jpg", idCat: "2"}
]

export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout ( ()=> {
            resolve (productos);
        }, 2000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    }) 
}

export const getProductosPorCategoria = () => {
    return new Promise(resolve => {
        setTimeout(() =>{
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)
    })
}
