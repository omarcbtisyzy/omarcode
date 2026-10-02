// ----------- Paso 1 y 2 - Funciones normales -----------
function calcularTotal(precio, cantidad = 1) {
  return precio * cantidad;
}

function esPedidoValido(cantidad) {
  return cantidad > 0;
}

function formatearPrecio(monto) {
  return "$" + monto.toFixed(2);
}

console.log("--- Paso 1 y 2 ---");
console.log(calcularTotal(10, 2), esPedidoValido(0), formatearPrecio(99));

// ----------- Paso 3 - Las mismas, en flecha corta -----------
const calcularTotal2 = (precio, cantidad = 1) => precio * cantidad;
const esPedidoValido2 = (cantidad) => cantidad > 0;
const formatearPrecio2 = (monto) => "$" + monto.toFixed(2);

console.log("--- Paso 3 ---");
console.log(calcularTotal2(10, 2), esPedidoValido2(0), formatearPrecio2(99));

// ----------- Paso 4 - La trampa de las llaves -----------
const dobleMal = (x) => { x * 2 };
console.log("--- Paso 4 ---");
console.log(dobleMal(5));
// Imprime undefined: con llaves, la función necesita un return explícito.

const dobleBien = (x) => x * 2;              // sin llaves: return implícito
const dobleBien2 = (x) => { return x * 2; }; // con llaves: return explícito
console.log(dobleBien(5));
console.log(dobleBien2(5));

// ----------- Paso 5 - El objeto respuesta -----------
const respuesta = {
  codigo: 200,
  estado(codigo) {
    this.codigo = codigo;
    return this;
  },
  json(cuerpo) {
    console.log("HTTP " + this.codigo);
    console.log(cuerpo);
    this.codigo = 200; // se reinicia para la siguiente petición
  }
};

// ----------- Paso 6 - Atender -----------
function atender(peticion, manejador) {
  console.log("-> " + peticion.metodo + " " + peticion.ruta);
  manejador(peticion, respuesta);
}

// ----------- Paso 7 - Los controladores -----------
const catalogo = [
  { id: "p-01", nombre: "Agua de Jamaica", precio: 15 },
  { id: "p-02", nombre: "Sandwich", precio: 28 }
];

const listarProductos = (req, res) => {
  res.json({ ok: true, datos: catalogo });
};

const verProducto = (req, res) => {
  const { id } = req.params;
  if (id !== "p-01") {
    res.estado(404).json({ ok: false, error: { mensaje: "No encontrado" } });
    return;
  }
  res.json({ ok: true, datos: catalogo[0] });
};

const crearPedido = (req, res) => {
  const { cantidad } = req.body;
  if (!esPedidoValido(cantidad)) {
    res.estado(400).json({
      ok: false,
      error: { mensaje: "La cantidad debe ser mayor que cero" }
    });
    return;
  }
  const total = calcularTotal(catalogo[0].precio, cantidad);
  res.estado(201).json({
    ok: true,
    datos: { producto: catalogo[0].nombre, cantidad, total }
  });
};

console.log("--- Paso 7 ---");
atender({ metodo: "GET",  ruta: "/api/productos" }, listarProductos);
atender({ metodo: "GET",  ruta: "/api/productos/p-01", params: { id: "p-01" } }, verProducto);
atender({ metodo: "GET",  ruta: "/api/productos/p-99", params: { id: "p-99" } }, verProducto);
atender({ metodo: "POST", ruta: "/api/pedidos", body: { cantidad: 3 } }, crearPedido);
atender({ metodo: "POST", ruta: "/api/pedidos", body: { cantidad: 0 } }, crearPedido);

// ----------- Paso 8 - Pasar vs Llamar -----------
console.log("--- Paso 8 ---");
const peticion = { metodo: "GET", ruta: "/api/productos" };
atender(peticion, listarProductos);
// listarProductos (sin paréntesis) es la función misma: se la pasa a atender.
// listarProductos() (con paréntesis) la EJECUTA en ese instante y da su resultado.
// Aquí siempre quiero la primera forma.

// ----------- Reto opcional -----------
function crearLogger(prefijo) {
  return function (mensaje) {
    console.log(prefijo + " " + mensaje);
  };
}

const log = crearLogger("[API]");
log("arrancando");