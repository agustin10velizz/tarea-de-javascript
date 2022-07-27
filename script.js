const sumar = (producto1, producto2) => producto1 + producto2

let respuesta


do {
    let  operacion,producto1, producto2

    do {
        producto1 = parseFloat(prompt("Cuantos productos de mates vas a comprar?"))
        producto2 = parseFloat(prompt("Cuantos productos de termos vas a comprar?"))
        operacion = prompt("Ingrese una operacion (+)")
    
        if(isNaN(producto1) || isNaN(producto2)) {
            console.log("Numero incorrecto")
        }
    
    
    }while (isNaN(producto1) || isNaN(producto2)) 
    
    switch(operacion) {
        case "+":
            console.log ("El acumulado de productos es igual a: ",sumar (producto1 ,producto2))
            break


        default:
            console.log("Operacion no valida")
    }
    do {
        respuesta = prompt("Necesita ingresar mas productos?").toLowerCase()
    }while(respuesta != "si" && respuesta != "no")
   
}while(respuesta != "no")