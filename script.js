//interectuar html , muestras las imagenes con el precio

class Producto{
    constructor(id,nombre, marca,precio,img, colores ){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.img = img
        this.colores = colores
    }
}

const productosss1 = new Producto (1,"Mate", "Imperial", "$18,20","https://d22fxaf9t8d39k.cloudfront.net/7f1bc31e3b67dc2038dec05e2915c9a31e748aff9233e38e7c0ae0b0683dcee1109209.png", "Rojo , Negro, Blanco")  
const productosss2 = new Producto (2,"Termo", "stanley", "$36,39","https://cdn.shopify.com/s/files/1/0238/5366/2285/products/14.2verde_2000x.jpg?v=1605274036", "Verde, Lila, Negro, Blanco")
const productosss3 = new Producto (3,"Bombilla", "Apacuero", "$6,91","https://http2.mlstatic.com/D_NQ_NP_898479-MLA45731292464_042021-W.jpg", "Blanco, Rojo, Verde, Violeta")
const productosss4 = new Producto (4,"Kit de mate", "LaPampa","$50,95","https://http2.mlstatic.com/D_NQ_NP_950260-MLA47443784107_092021-O.webp" , "Negro, Rojo, Rosa, Blanco, Verde")


const productoss = [productosss1, productosss2, productosss3, productosss4]


const mate_productos = document.getElementById("mate_productos")



productoss.forEach( producto =>{
    
    mate_productos.innerHTML += `
    
    <div class="card mb-3"id="producto ${producto.nombre}" style="max-width: 450px; ">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img src="${producto.img}"  " style="margin-top: 10px; " class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Producto: ${producto.nombre}</h5>
          <p class="card-text"> Marca: ${producto.marca}</p>
          <p class="card-text"> Colores: ${producto.colores}</p>
          <p class="card-text"> Precio Dolar: ${producto.precio}</p>
  
        </div>
      </div>
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
let compras=[]
formUser.addEventListener("submit",(crear)=>{  
    crear.preventDefault();
    let producto=  document.getElementById("producto").value
    let color = document.getElementById("color").value
    let direccion = document.getElementById("direccion").value
    const compra = new comprar(producto, color , direccion );
    compras.push(compra);

  //al tocar compra le llegara un mensaje de que a hecho bien la compra o le falto completar los datos
  
    if (producto === '' || color === '' || direccion === ''){
        Toastify({
            text: "Faltan completar la compra",
            
            style: {
              background: "linear-gradient(to left, #d31027, #ea384d)",
            }
          }).showToast();
    }else{

        Swal.fire({
            icon: 'success',
            title: '<h3 >Compra finalizada  <h3>',
            text: '',
            footer: '<a >En breve podra ver su compra </a>'
        }) 
    }

    

})

// al tocar "ver compra" podra ver el produto que compro
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

//cuando toque "ver la compra" podra ver el producto , el color y  la dirreccion que puso
botonCompra.addEventListener('click', () => {
    const CarritoStorage = JSON.parse(localStorage.getItem("compras"))
    
    divCarrito.innerHTML = ""
    CarritoStorage.forEach((compras, index) => {
        divCarrito.innerHTML += `
        <div class="card border-primary mb-3" id="compra${index}" style="max-width: 14rem;margin:20px;">
            <div class="card-header"><h2>Producto:${compras.producto}<h2></div>
            <div class="card-body">
                <p class="card-text">Color:${compras.color}</p>
                <p class="card-text">Direccion:${compras.direccion}</p>
                <button class="btn btn-danger">Borrar compra</button>
                
            </div>
        </div>
        `
    })

    //al tocar "borrar compra le salta una notificacion que borro la compra"
    CarritoStorage.forEach((compras, index) => {
        document.getElementById(`compra${index}`).children[1].children[2].addEventListener('click', () => {
            document.getElementById(`compra${index}`).remove()
            localStorage.setItem("compras", JSON.stringify(compras))

            Swal.fire({
                icon: 'info',
                title: '<h3 >Compra Eliminada  <h3>',
                text: '',
                footer: ''
            }) 
        
        })
    })
})



//operador avanzados "agregando un acceso condicional"

const precios1 = {
    nombre : "Mate",
    marca: "Imperial",
    colores: "Rojo , Negro, Blanco",
    precio: 2500
}
const precios2 =  {
    nombre : "Termo",
    marca: "stanley",
    colores: "Verde, Lila, Negro, Blanco",
    precio: 5000
}
const precios3 = {
    nombre : "Bombilla",
    marca: "Apacuero",
    colores: "Blanco, Rojo, Verde, Violeta",
    precio: 950
}
const precios4 = {
    nombre : "Kit de mate",
    marca: "LaPampa",
    colores: "Negro, Rojo, Rosa, Blanco, Verde",
    precio: 7000
}
const precio = [precios1, precios2, precios3, precios4]

let acumulador = 0
precio.forEach(precios => {
    acumulador += precios?.precio ?? 0
})
console.log(acumulador)


//fetch / esto hace consulta de los productos en la consola

fetch("./json/mate.json")
.then(response => response.json())
.then(mate =>{
console.log(mate)
})


//preguntando el precio actual del dolar y actualizando cada 10 segundos
const divPrecioDolar = document.getElementById("divPrecioDolar")
function mostrarDolar() {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial}) => {
        divPrecioDolar.innerHTML = `
            <div>
                <h2 class="dolar">Precio actual del dolar </h2>
                <p class="dolar ">Oficial: $${oficial}</p>
            <div>
        `
    })
}
mostrarDolar()
setInterval(() => {
    mostrarDolar()
}, 10000)

