let solicitudes = [];

function solicitarInformacion() {
  let nombre = document.getElementById("nombre").value;
  let origen = document.getElementById("origen").value;
  let destino = document.getElementById("destino").value;
  let nPersonas = document.getElementById("nPersonas").value;
  let fecha = document.getElementById("fecha").value;

  let solicitud = {
    nombre,
    origen,
    destino,
    nPersonas,
    fecha,
  };
  solicitudes.push(solicitud);
  console.log(solicitudes);
}

let solicitudesFiltradas = [];

function filtro() {
  solicitudesFiltradas=[];
  for (let solicitud of solicitudes) {
    const destino = solicitud.destino.toLowerCase();

    if (
      destino == "mallorca" ||
      destino == "canarias" ||
      destino == "galicia"
    ) {
      solicitudesFiltradas.push(solicitud);
    }
  }

  let tabla = document.getElementById("tabla");
  tabla.innerHTML = ``;
  for (let solicitud of solicitudesFiltradas) {
    tabla.innerHTML += `<tr>
                      <td>${solicitud.nombre}</td>
                      <td>${solicitud.origen}</td>
                      <td>${solicitud.destino}</td>
                      <td>${solicitud.nPersonas}</td>
                      <td>${solicitud.fecha}</td>
                     </tr>`;
  }
  console.log(solicitudesFiltradas);
}
