document.addEventListener("DOMContentLoaded", function() {
    // Variables de los filtros
    const filtroUbicacion = document.getElementById('filtro-ubicacion');
    const filtroPrecio = document.getElementById('filtro-precio');
    const propiedades = document.querySelectorAll('.propiedad');

    // Función para aplicar el filtro
    function filtrarPropiedades() {
        const ubicacionSeleccionada = filtroUbicacion.value.toLowerCase();
        const precioSeleccionado = parseInt(filtroPrecio.value);

        propiedades.forEach(propiedad => {
            const ubicacion = propiedad.querySelector('.ubicacion').textContent.toLowerCase();
            const precio = parseInt(propiedad.querySelector('.precio').textContent.replace('₡', '').replace(',', '').trim());

            // Mostrar propiedad si cumple con los filtros seleccionados
            if (
                (ubicacion.includes(ubicacionSeleccionada) || ubicacionSeleccionada === '') &&
                (precio <= precioSeleccionado || precioSeleccionado === 0)
            ) {
                propiedad.style.display = 'block';
            } else {
                propiedad.style.display = 'none';
            }
        });
    }

    // Agregar event listeners a los filtros
    filtroUbicacion.addEventListener('change', filtrarPropiedades);
    filtroPrecio.addEventListener('change', filtrarPropiedades);
});
document.getElementById("formPublicar").addEventListener("submit", function(e) {
  e.preventDefault();

  const titulo = document.querySelector('[name="titulo"]').value;
  const ubicacion = document.querySelector('[name="ubicacion"]').value;
  const precio = document.querySelector('[name="precio"]').value;
  const descripcion = document.querySelector('[name="descripcion"]').value;

  const numero = "+50661903940";
  const mensaje = `📍 Nueva propiedad publicada:
🏡 Título: ${titulo}
📌 Ubicación: ${ubicacion}
💵 Precio por noche: ₡${precio}
📝 Descripción: ${descripcion}`;

  const url = `https://wa.me/${+50661903940}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const numeroWhatsApp = "50661903940"; // Cambia por tu número

    const texto = `Hola, soy ${Luis Gonzalez}. Mi correo es ${Luissequeira96@hotmail.com}. Quisiera decirte: ${Escribeme por privado si necesitas mas ayuda}`;

    const url = `https://wa.me/${+50661903940}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
});
</script>
