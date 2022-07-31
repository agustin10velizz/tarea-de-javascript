const sumar = (producto1, producto2, producto3, producto4 ) => producto1 + producto2 + producto3 + producto4
const multiplicar = (producto1, producto2, producto3, producto4 ) => producto1 * producto2 * producto3 * producto4

let respuesta


do {
    let  operacion,producto1, producto2 ,producto3 ,producto4 , precio

    do {
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        producto3 = parseFloat(prompt("Cuantos productos de bombilla vas a comprar?"))
        producto4 = parseFloat(prompt("Cuantos productos de kit de mate vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")
        
       
        


        if(isNaN(producto1) || isNaN(producto2)) {
            console.log("Numero incorrecto")
        }
    
    
    }while (isNaN(producto1) || isNaN(producto2)) 
    
    switch(operacion) {
        case "+":
            console.log ("El acumulado de productos es igual a: ",sumar (producto1 ,producto2, producto3, producto4))
            console.log ("en total te saldria :  ", multiplicar(producto1,producto2,producto3, producto4, precio))
            break


        
        default:
            console.log("Operacion no valida")

        
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
const productosss2 = new Producto ("Termo", "stanley", "12000")
const productosss3 = new Producto ("Bombilla", "Apacuero", "950")
const productosss4 = new Producto ("Kit de mate", "LaPampa","27000")

const productoss = [productosss1, productosss2, productosss3, productosss4]

console.table(productoss)