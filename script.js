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

      
        
       
    
    
    }while (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4))

    
    switch(operacion) {
        case "+":
            console.log ("El acumulado de productos es igual a: ",sumar (producto1 ,producto2, producto3, producto4))
            console.log ("en total te saldria :  ", multiplicar(producto1,producto2,producto3, producto4, precio ))
            break
        
    } 


    do {
        respuesta = prompt("Necesita ingresar mas productos?").toLowerCase()
    }while(respuesta != "si" && respuesta != "no")
        
   
}while(respuesta != "no")



class Producto{
    constructor(nombre, marca, precio){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
    }
}

const productosss1 = new Producto ("Mate", "Imperial", "2500")
const productosss2 = new Producto ("Termo", "stanley", "5000")
const productosss3 = new Producto ("Bombilla", "Apacuero", "950")
const productosss4 = new Producto ("Kit de mate", "LaPampa","7000")

const productoss = [productosss1, productosss2, productosss3, productosss4]

console.table(productoss)