"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

interface Station {
  id: string;
  name: string;
  status: string;
  coords: string;
  lat: number;
  lng: number;
  elevation: string;
  lastReading: string;
  waterLevel: string;
  temperature: string;
}

interface MapComponentProps {
  stations: Station[];
  volcanoCoords: { lat: number; lng: number };
  setSelectedStation: (id: string) => void;
  mapView: { url: string; attribution: string };
}

// Crear iconos personalizados
const createCustomIcon = (color: string, isVolcano: boolean = false) => {
  const iconHtml = isVolcano
    ? `<div style="background: #dc2626; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 16px;">🌋</div>`
    : `<div style="background: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); animation: pulse 2s infinite;"></div>`;

  return L.divIcon({
    html: iconHtml,
    className: "custom-div-icon",
    iconSize: isVolcano ? [30, 30] : [20, 20],
    iconAnchor: isVolcano ? [15, 15] : [10, 10],
    popupAnchor: [0, isVolcano ? -15 : -10],
  });
};

export default function MapComponent({
  stations,
  volcanoCoords,
  setSelectedStation,
  mapView,
}: MapComponentProps) {
  useEffect(() => {
    // Agregar estilos CSS para la animación de pulso
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
      .custom-div-icon {
        background: transparent !important;
        border: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <MapContainer
      center={[volcanoCoords.lat, volcanoCoords.lng]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer url={mapView.url} attribution={mapView.attribution} />

      {/* Marcador del volcán */}
      <Marker
        position={[volcanoCoords.lat, volcanoCoords.lng]}
        icon={createCustomIcon("#dc2626", true)}
      >
        <Popup>
          <div className="text-center">
            <div className="text-2xl mb-2">🌋</div>
            <div className="font-bold">Volcán Antisana</div>
            <div className="text-sm text-gray-600">
              {volcanoCoords.lat.toFixed(6)}, {volcanoCoords.lng.toFixed(6)}
            </div>
          </div>
        </Popup>
      </Marker>

      {/* Marcadores de las estaciones */}
      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lng]}
          icon={createCustomIcon(
            station.status === "Activa" ? "#10b981" : "#ef4444"
          )}
          eventHandlers={{
            click: () => setSelectedStation(station.id),
          }}
        >
          <Popup>
            <div className="min-w-[200px]">
              <div className="flex items-center mb-2">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    station.status === "Activa" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <div className="font-bold">{station.name}</div>
              </div>
              <div className="text-sm space-y-1">
                <div>
                  <strong>ID:</strong> {station.id}
                </div>
                <div>
                  <strong>Elevación:</strong> {station.elevation}
                </div>
                <div>
                  <strong>Nivel de Agua:</strong> {station.waterLevel}
                </div>
                <div>
                  <strong>Temperatura:</strong> {station.temperature}
                </div>
                <div>
                  <strong>Última lectura:</strong> {station.lastReading}
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
