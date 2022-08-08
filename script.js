
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
    constructor(id,nombre, marca, precio){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
    }
}

const productosss1 = new Producto (1,"Mate", "Imperial", "2500")
const productosss2 = new Producto (2,"Termo", "stanley", "5000")
const productosss3 = new Producto (3,"Bombilla", "Apacuero", "950")
const productosss4 = new Producto (4,"Kit de mate", "LaPampa","7000")

const productoss = [productosss1, productosss2, productosss3, productosss4]

const mate_productos = document.getElementById("mate_productos")

productoss.forEach( producto =>{
    
    mate_productos.innerHTML += `
    
 <div class="card" id="producto ${producto.nombre}" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> Nombre: ${producto.nombre}</h5>
    <p class="card-text"> Marca: ${producto.marca}</p>
    <p class="card-text"> Precio: ${producto.precio}</p>

        </div>
    </div>

    `
})



//agregando eventos

class Compras {
    constructor(username, productos, dia_hora) {
        this.username = username
        this.productos = productos
        this.dia_hora = dia_hora
    }
}
const compra = []
const formUser = document.getElementById("formUser")

formUser.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('username').value
    let productos = document.getElementById('productos').value
    let dia_hora = document.getElementById('dia_hora').value
    const user = new Compras(username, productos, dia_hora)
    compra.push(user)
    console.log(compra)
    formUser.reset()
})