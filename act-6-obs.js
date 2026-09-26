//datos y metodos de un objeto
//ficha de menu
//los datos son distintos a proposito, compara la forma, no el contenido

const producto = {
    id: "P-01",
    nombre:"agua de jamaica",
    precio:15,
    categoria:"bebida",
    disponible:true,

    //metodos
    resumen(){
        return this.nombre + " - $ " + this.precio + "(" + this.categoria + ")"
    },

    estadisponible(){
        return this.disponible;
    }
};

console.log("Paso 1 - Imprimiendo el producto");
console.log(producto);

//paso 2 - tres formas de leer
console.log("-------paso 2-------");
const campo = "nombre";
console.log(producto.nombre);
console.log(producto["nombre"]);
console.log(producto[campo]);

console.log("-----paso 3------");
console.log(producto.resumen());
console.log(producto.estadisponible());

// paso 4e el usuario
const usuario = {
    id:"u01",
    nombre:"juanito",
    correo:"juanitolapolla@gmail.com",
    telefono:81663734891,
    roll:"alumno"

};

//-----paso 5-----
const pedido = {
    folio:"pr-01",
    cliente: usuario,
    producto: producto,
    cantidad:3,
    estado:"pendiente"
}

console.log("----paso 5----")
console.log(pedido.cliente.nombre);
console.log(pedido.producto.precio);
console.log(pedido.cliente.telefono);

console.log("-----paso6------");
const {nombre, precio} = producto;
console.log(nombre, precio);
const {cantidad, nota = "sin nota"} = pedido;
console.log(cantidad, nota);
console.log("Omar Soy Programador");

//-----paso7----
const total = producto.precio * pedido.cantidad;
pedido.total= total;

console.log("-----Paso 7-----");
console.log(pedido);

//----paso8 copiar------

console.log("---paso 8---")
const copiamala = producto;
copiamala.precio = 999;
console.log(producto.precio);
// va imprimir 999: copiamala y producto apuntan al mismo objeto
//la variable no guarda el objeto, guarda donde esta

producto.precio = 15; //lodejamoscomoestaa

const copiabuena = {...producto};
copiabuena.precio = 1000;
console.log(producto.precio); //15 el original quedo intacto

//----paso 9----

console.log("----paso9----");
const respuestaok ={
    ok: true,
    data:pedido
};

const respuestaerror = {
    ok: false,
    error: {
        mensaje:"El producto no esta disponible",
        detalles:[]
    }
};




console.log(respuestaok);
console.log(respuestaerror);
