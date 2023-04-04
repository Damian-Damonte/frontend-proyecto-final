import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./leaflet.css"
import icono from "./icon-location-map.png"
import L from 'leaflet';

export default function LeafletMap({latitud, longitud}) {
  const position = [latitud, longitud];
  const miIcono = L.icon({
    iconUrl: icono,
    iconSize: [40, 40], // tamaño del icono en pixeles
    iconAnchor: [20, 20], // posición del ancla del icono, en este caso la mitad del ancho y la altura del icono
    popupAnchor: [0, -40], // posición del ancla del popup, en este caso arriba del icono
  });

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        margin: "o auto",
        position: "relative",
      }}
    >
      <MapContainer
        center={position}
        zoom={16}
        minZoom={5}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "400px",
          margin: "o auto",
          position: "relative",
        }}
      >
        <Marker position={position} icon={miIcono}>
          <Popup>Hotel</Popup>
        </Marker>

        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}
