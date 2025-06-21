
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
    }
    const json = JSON.parse(str);
    const map = new Map(Object.entries(json));
    return map;
}

// Devolver la lista de categorias almacenadas 
function obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

function obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

function obtenerCursos(categoria = "todos") {
    const map = obtenerMap("cursos");

    let productos = [];
    if (categoria == null || categoria === "todos") {
        productos = map.values();
    } else {
        productos = map.values().filter(prod => prod.categoria === categoria);
    } return productos;

}

function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}

// Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = "";
    let precio = 0;

    carrito.forEach((curso, posicion) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between mb-2';
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="row">
                        <h6 class="my-0">${curso.nombre}</h6>
                        <small>${curso.precio}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarCurso(${posicion})" >
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
        carritoContainer.appendChild(li);
        precio += curso.precio;
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = precio.toFixed(2);

}


// Agregar un curso al carrito de compras
function agregarCurso(curso, actualizarCarrito = true) {
    let carrito = obtenerCarrito();
    const existe = carrito.some(item => item.codigo === curso.codigo);
    carrito.push(curso);

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);

    if (actualizarCarrito === true) {
        mostrarCarrito();
    }
}

// Eliminar un curso del carrito de compras
function eliminarCurso(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);
    mostrarCarrito();
}

// Vaciar el carrito de compras
function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}



function obtenerCursoPorCodigo(codigoProducto) {
    const cursos = obtenerMap("cursos");
    const respuesta = cursos.get(codigoProducto);
    if (!respuesta) {
        throw new Error(`No se encontró el curso con el código: ${codigoProducto}`);
    }
    return respuesta;
}
