// Menu de Hamburguesa
// Obtener el botón de hamburguesa y el menú
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('ul.nav-list');

// Alternar la clase "active" en el menú al hacer clic en el botón de hamburguesa
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Array de servicios
const servicios = [
     {
        nombre: "Exámenes de microbiología",
        descripcion: "Análisis especializados en microbiología para identificar bacterias y virus.",
        descripcionExtendida: "Realizamos cultivos y análisis microbiológicos avanzados para identificar bacterias, virus u hongos en muestras. Esto es vital para un diagnóstico y tratamiento adecuado.",
        imagen: "images/microbiologia.jpg"
    },
    {
        nombre: "Análisis de sangre",
        descripcion: "Realizamos análisis de sangre completos para diagnósticos rápidos y precisos.",
        descripcionExtendida: "El análisis de sangre es uno de los procedimientos más comunes para diagnosticar diferentes enfermedades y condiciones de salud. Los resultados permiten a los médicos identificar y tratar diversas afecciones.",
        imagen: "images/analisis-sangre.jpg"
    },
    {
        nombre: "Pruebas de diagnóstico",
        descripcion: "Pruebas avanzadas para detectar diversas enfermedades y condiciones.",
        descripcionExtendida: "Estas pruebas pueden incluir análisis de sangre, radiografías, y otros exámenes que ayudan a los médicos a detectar condiciones o enfermedades no visibles en una consulta rutinaria.",
        imagen: "images/pruebas-diagnostico.jpg"
    },
    {
        nombre: "Consultas especializadas",
        descripcion: "Contamos con especialistas para consultas médicas en diversas áreas.",
        descripcionExtendida: "Nuestros especialistas están disponibles para consultas en áreas como cardiología, dermatología, endocrinología, entre otras. Garantizamos atención profesional y personalizada.",
        imagen: "images/consultas.jpg"
    }
];

// Función para cargar los servicios
function cargarServicios() {
    const serviciosList = document.getElementById('services-list');

    servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('servicio');
        servicioDiv.onclick = () => mostrarDetalle(servicio); // Mostrar detalle al hacer clic

        servicioDiv.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}" class="img-service">
            <h3>${servicio.nombre}</h3>
            <p>${servicio.descripcion}</p>
        `;

        serviciosList.appendChild(servicioDiv);
    });
}

// Función para mostrar detalles del servicio
function mostrarDetalle(servicio) {
    const detailSection = document.getElementById('service-detail');
    document.getElementById('service-name').textContent = servicio.nombre;
    document.getElementById('service-description').textContent = servicio.descripcionExtendida;
    detailSection.style.display = 'block'; // Mostrar detalle
}

// Función para cerrar el detalle
document.getElementById('close-detail').onclick = function() {
    document.getElementById('service-detail').style.display = 'none'; // Ocultar detalle
};

// Llamamos a la función para cargar los servicios cuando la página cargue
window.onload = cargarServicios;



