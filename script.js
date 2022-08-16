
/*
const sumar = (producto1, producto2, producto3, producto4 ) => producto1 + producto2 + producto3 + producto4
const multiplicar = (producto1, producto2, producto3, producto4 ) => producto1 * producto2 * producto3 * producto4




const zonas = []
zonas.push("Capital federal")
zonas.push("Ramos mejia")
zonas.push("Moron")
zonas.push("Palermo")

console.log (zonas)

let opcion
let respuesta


do {
    let  operacion,producto1, producto2 ,producto3 ,producto4 , precio , opcion

    do { opcion = prompt('Elija la opcion en que zona va a comprar:\n1 - Capital Federal\n2 - Ramos Mejia\n3 - Moron\n4- Palermo');

    switch (opcion){
        case '1': 
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        producto3 = parseFloat(prompt("Cuantos productos de bombilla vas a comprar?"))
        producto4 = parseFloat(prompt("Cuantos productos de kit de mate vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")

        break ;

        case '2': 
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        producto3 = parseFloat(prompt("Cuantos productos de bombilla vas a comprar?"))
        producto4 = parseFloat(prompt("Cuantos productos de kit de mate vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")

        break ;

        case '3':
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        producto3 = parseFloat(prompt("Cuantos productos de bombilla vas a comprar?"))
        producto4 = parseFloat(prompt("Cuantos productos de kit de mate vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")
        
        break;

        case '4':
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        producto3 = parseFloat(prompt("Cuantos productos de bombilla vas a comprar?"))
        producto4 = parseFloat(prompt("Cuantos productos de kit de mate vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")
        
        break;
    }

      
        
       
    
    
    }

    
    switch(operacion) {
        case "+":
            console.log ("El acumulado de productos es igual a: ",sumar (producto1 ,producto2, producto3, producto4))
            console.log ("en total te saldria :  ", multiplicar(producto1,producto2,producto3, producto4, precio ))
            break
        
    } 


    do {
        respuesta = prompt("Necesita ingresar mas productos?").toLowerCase()
    }
        
   
}
*/

//interectuar html 

class Producto{
    constructor(id,nombre, marca, precio,img){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.img = img
    }
}

const productosss1 = new Producto (1,"Mate", "Imperial", "$2500","https://d22fxaf9t8d39k.cloudfront.net/7f1bc31e3b67dc2038dec05e2915c9a31e748aff9233e38e7c0ae0b0683dcee1109209.png")  
const productosss2 = new Producto (2,"Termo", "stanley", "$5000","https://cdn.shopify.com/s/files/1/0238/5366/2285/products/14.2verde_2000x.jpg?v=1605274036")
const productosss3 = new Producto (3,"Bombilla", "Apacuero", "$950","https://http2.mlstatic.com/D_NQ_NP_898479-MLA45731292464_042021-W.jpg")
const productosss4 = new Producto (4,"Kit de mate", "LaPampa","$7000","https://http2.mlstatic.com/D_NQ_NP_950260-MLA47443784107_092021-O.webp")


const productoss = [productosss1, productosss2, productosss3, productosss4]


const mate_productos = document.getElementById("mate_productos")

productoss.forEach( producto =>{
    
    mate_productos.innerHTML += `
    
 <div class="card" id="producto ${producto.nombre}" style="width: 18rem;">
 
    <div class="card-body">
    
    <h5 class="card-title"> Nombre: ${producto.nombre}</h5>
    <p class="card-text"> Marca: ${producto.marca}</p>
    <p class="card-text"> Precio: ${producto.precio}</p>
    <img src="${producto.img}" class="img" alt="...">
        </div>
    </div>

    

    `
})

//usando storage y jsnon

localStorage.setItem("bienvenido", "buenas tardes")
console.log(localStorage.getItem("bienvenido"))


//usando el modo oscuro y claro

const botonNegro = document.querySelector("#botonModoOscuro")

botonNegro.addEventListener ('click', () =>{
    document.body.classList.toggle("ModoOscuro")
    botonNegro.classList.toggle('active')


    //guardamos el modo oscuro en localstorage
    if (document.body.classList.contains ("ModoOscuro")){
        localStorage.setItem("ModoOscuro" , 'Oscuro')
    }   else{
        localStorage.setItem("ModoOscuro" , 'Claro')
    }
})

// obtendra el modo que puso
if (localStorage.getItem("ModoOscuro") === 'Oscuro'){
    document.body.classList.add("ModoOscuro")
    botonNegro.classList.add('active')

}   else {
    document.body.classList.remove("ModoOscuro")
    botonNegro.classList.toggle('active')

}


//agregando eventos y haciendo intereaccion con el formulario

class comprar {
    constructor(producto, color, direccion) {
        this.producto = producto
        this.color = color
        this.direccion = direccion
        
    }
}

const compra = []
const formUser = document.getElementById("formUser")



if(localStorage.getItem("compras")) {
    Compra = JSON.parse(localStorage.getItem("compras"))
} else {
    localStorage.setItem("compra", JSON.stringify(compra))    
}


const botonCompra = document.getElementById("VerCompra")
const divCarrito = document.getElementById("divCarrito")

formUser.addEventListener("submit", (e) => {
    e.preventDefault()

    const datForm = new FormData(e.target)
   
    const compraObj = new comprar(datForm.get("producto"), datForm.get("color"), datForm.get("direccion"))

    compra.push(compraObj)
    localStorage.setItem("compras", JSON.stringify(compra))
    formUser.reset()
})

botonCompra.addEventListener('click', () => {
    const CarritoStorage = JSON.parse(localStorage.getItem("compras"))
    

    divCarrito.innerHTML = ""
    CarritoStorage.forEach((compra, indice) => {
        divCarrito.innerHTML += `
        <div class="card border-primary mb-3" id="tarea${indice}" style="max-width: 14rem;margin:4px;">
            <div class="card-header"><h2>Producto:${compra.producto}<h2></div>
            <div class="card-body">
                <p class="card-text">Color:${compra.color}</p>
                <p class="card-text">Direccion:${compra.direccion}</p>
                <button class="botonCompra btn btn-info">comprar</button>
                <button class="btn btn-danger">Borrar compra</button>
                
            </div>
        </div>
        `
    })

    /*
    CarritoStorage.forEach((Compra, index) => {
        document.getElementById(`compra${index}`).children[1].children[5].addEventListener('click', () => {
            document.getElementById(`compra${index}`).remove()
            Compra.splice(index,1)
            localStorage.setItem("compra", JSON.stringify(Compra))
        })
    })*/
})


let CarritoStorage = JSON.parse (localStorage.getItem ("carrito"))

if (CarritoStorage){
    CarritoStorage = CarritoStorage
} else {
    carrito = []
}