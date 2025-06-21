
// Inicialización de categorías en localStorage
categorias = {
    "101": { codigo: "101", nombre: "Accesorios para Computadoras", descripcion: "Dexcepteur sint occaecat", imagen: "img/Cat1.png" },
    "102": { codigo: "102", nombre: "Audio y Sonido", descripcion: "Dexcepteur sint occaecat", imagen: "img/cat2.png" },
    "103": { codigo: "103", nombre: "Accesorios Gamer", descripcion: "Solamente gamers", imagen: "img/cat3.png" },
    "104": { codigo: "104", nombre: "Accesorios para Celulares", descripcion: "Dexcepteur sint occaecat", imagen: "img/cat4.png" },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
    "105": {
        codigo: "105", titulo: "Bienvenidos", nombre: "Diseño1",
        descripcion: "Excepteur sint occaecat cupidatat non proident, DExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.sunt in culpExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ida qui officia deserunt mollit anim id",
        imagen: "img/Ban1.png"
    },
    "106": {
        codigo: "106", titulo: "Nuevo", nombre: "Diseño2",
        descripcion: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.mollit anim id",
        imagen: "img/SillaGamer.png "
    },
    "107": {
        codigo: "107", titulo: "Nuevo", nombre: "Diseño3",
        descripcion: "Excepteur sint occaecat cupidatat non proident, sunt in culpa quiUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.officia deserunt mollit anim id",
        imagen: "img/MouseGamer.png"
    },
}
localStorage.setItem("banners", JSON.stringify(banners));


cursos = {
    //Accesorios Gamer
    "201": {
        codigo: "201", nombre: "Silla Gamer",
        descripcion: "Es comodo para tu espalda", categoria: "103", imagen: "img/SillaGamer.png", clasificacion: 3, precio: 29.99,
    },

    "202": {
        codigo: "202", nombre: "Teclado Gamer",
        descripcion: "Es comodo para tus dedos", categoria: "103", imagen: "img/TecladoGamer.png", clasificacion: 4, precio: 49.99,
    },

    "203": {
        codigo: "203", nombre: "Mouse Gamer",
        descripcion: "Es comodo para tus manos", categoria: "103", imagen: "img/MouseGamer.png", clasificacion: 5, precio: 19.99,
    },

    //Audio y Sonido 
    "204": {
        codigo: "204", nombre: "Parlantes Bluetooth",
        descripcion: "Son comodos para tus oidos", categoria: "102", imagen: "img/Parlantes.png", clasificacion: 3, precio: 39.99,
    },

    "205": {
        codigo: "205", nombre: "Microfono",
        descripcion: "Es comodo para transmitir sonido", categoria: "102", imagen: "img/Micrófono.png", clasificacion: 4, precio: 59.99,
    },

    "206": {
        codigo: "206", nombre: "Audifonos Inalambricos",
        descripcion: "Es comodo para tus ojos", categoria: "102", imagen: "img/Audifonos.png", clasificacion: 5, precio: 199.99,
    },

};
localStorage.setItem("cursos", JSON.stringify(cursos));