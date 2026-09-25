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