               
/*
    5 + 5 = 10
    "5" + "5" = "55"
    "5" + 5 = "55"
  */



/*let acumulador = 0

for (let i=1; i < 16;  i++ ){ //i+=1 , i=i + 1 , i++ (maneras de simplificar)
    let productos = parseInt(prompt("Ingrese la cantidad de productos"))
    
    acumulador += productos
}
console.log ("El acumulado de productos es igual a: " +(acumulador/15))
console.log (`El acumulado de productos es igual a: ${acumulador /15}`)
*/

let repetir = true

while (repetir){ //repetir == true
  
  let producto1 = parseFloat(prompt("Ingrese la cantidad de productos que necesite"))
  let producto2 = parseFloat(prompt("Ingrese otra cantidad de productos"))

  console.log (producto1 + producto2)
  let confirmacion = prompt("Necesita mas productos?").toLowerCase()

  if(confirmacion == "no" ){
    repetir = false //break
  }

}