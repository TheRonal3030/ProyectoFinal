
// Inicialización de categorías en localStorage
categorias = {
    "101": { codigo: "101", nombre: "Accesorios para Computadoras", descripcion: "Accesorios que optimizan el uso y rendimiento de tu computadora", imagen: "img/cat1.png" },
    "102": { codigo: "102", nombre: "Audio y Sonido", descripcion: "Accesorios que mejoran la calidad de audio y tu experiencia sonora.", imagen: "img/cat2.png" },
    "103": { codigo: "103", nombre: "Accesorios Gamer", descripcion: "Equipamiento diseñado para mejorar tu rendimiento y experiencia de juego.", imagen: "img/cat3.png" },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
    "105": {
        codigo: "105", titulo: "Bienvenidos", nombre: "Diseño1",
        descripcion: "En V.A.TECNOLÓGICOS nos apasiona la tecnología y trabajamos para ofrecerte los mejores productos, soluciones y accesorios que se adaptan a tus necesidades. Ya sea que busques optimizar tu espacio de trabajo, mejorar tu experiencia gamer, o simplemente mantener tus dispositivos actualizados, aquí encontrarás calidad, innovación y atención personalizada.",
        imagen: "img/Ban1.png"
    },
    "106": {
        codigo: "106", titulo: "Nuevo", nombre: "Diseño2",
        descripcion: "Diseñada para ofrecerte la máxima comodidad, soporte ergonómico y estilo moderno, nuestra nueva silla es perfecta tanto para largas jornadas de trabajo como para sesiones intensas de gaming. Con materiales de alta calidad, ajustes personalizados y un diseño pensado para tu bienestar, elevará tu experiencia frente al computador.",
        imagen: "img/SillaGamer.png "
    },
    "107": {
        codigo: "107", titulo: "Nuevo", nombre: "Diseño3",
        descripcion: "Diseñado para ofrecer precisión, velocidad y comodidad, este mouse gamer cuenta con sensores de alta resolución, retroiluminación RGB, botones programables y un diseño ergonómico ideal para largas sesiones de juego.",
        imagen: "img/MouseGamer.png"
    },
}
localStorage.setItem("banners", JSON.stringify(banners));


objetos = {
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

    //Accesorios para Computadoras
    "207": {
        codigo: "207", nombre: "Base para Computadora",
        descripcion: "Es comodo para tu computadora", categoria: "101", imagen: "img/baseref.png", clasificacion: 3, precio: 49.99,
    },
    "208": {
        codigo: "208", nombre: "Memoria USB", 
        descripcion: "Es comodo para guardar tus archivos", categoria: "101", imagen: "img/memoriausb.png", clasificacion: 4, precio: 19.99,
    },
    "209": {
        codigo: "209", nombre: "Webcams",
        descripcion: "Es comodo para tus videollamadas", categoria: "101", imagen: "img/webcam.png", clasificacion: 5, precio: 29.99,
    },

};
localStorage.setItem("objetos", JSON.stringify(objetos));