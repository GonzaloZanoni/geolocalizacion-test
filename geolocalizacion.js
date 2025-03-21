let map;

async function initMap() {
  const position = { lat: 0, lng: 0 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMOMAPA",
  });
}

function obtenerUbicacion() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      document.getElementById(
        "info"
      ).textContent = `Latitud:${lat} - Longitud:${lng}`;
      //   console.log(`Latitud:${lat} - Longitud:${lng}`);

      map.setCenter({ lat, lng });
      map.setZoom(15);

      new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat, lng },
        title: "punto de ubicacion",
      });
    },
    function (error) {
      console.log(`error: ${error}`);
    }
  );
}

document.getElementById("btn").addEventListener("click", obtenerUbicacion);
