"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Componente dinámico del mapa completo que maneja Leaflet
const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-200">
      <div className="text-gray-600">Cargando mapa...</div>
    </div>
  ),
});

export default function InteractiveMaps() {
  const [selectedStation, setSelectedStation] = useState("P42");
  const [mapView, setMapView] = useState("satellite");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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
  }, []);

  // Coordenadas actualizadas con las proporcionadas
  const stations = [
    {
      id: "P42",
      name: "P42-Antisana Ramón Huañuna",
      status: "Activa",
      coords: "0°36'08\"S, 78°11'55\"W",
      lat: -0.6022867145410288,
      lng: -78.1986689291808,
      elevation: "4,250 m",
      lastReading: "2024-01-15 14:30",
      waterLevel: "2.35 m",
      temperature: "8.5°C",
    },
    {
      id: "P43",
      name: "P43-Antisana Limboasi",
      status: "Activa",
      coords: "0°35'37\"S, 78°12'30\"W",
      lat: -0.5934839659614135,
      lng: -78.20825370752031,
      elevation: "3,980 m",
      lastReading: "2024-01-15 14:32",
      waterLevel: "1.87 m",
      temperature: "9.2°C",
    },
    {
      id: "P55",
      name: "P55-Antisana Diguchi",
      status: "Activa",
      coords: "0°34'23\"S, 78°15'46\"W",
      lat: -0.5731364867736277,
      lng: -78.262844542214,
      elevation: "4,100 m",
      lastReading: "2024-01-15 14:28",
      waterLevel: "3.12 m",
      temperature: "7.8°C",
    },
  ];

  // Coordenadas del volcán Antisana
  const volcanoCoords = {
    lat: -0.4813239532557332,
    lng: -78.14398105206119,
  };

  // Configuración de las diferentes vistas del mapa
  const mapViews = [
    {
      id: "satellite",
      name: "Vista Satelital",
      icon: "🛰️",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Tiles &copy; Esri",
    },
    {
      id: "terrain",
      name: "Relieve",
      icon: "🏔️",
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      attribution: "&copy; OpenTopoMap contributors",
    },
    {
      id: "hybrid",
      name: "Híbrido",
      icon: "🗺️",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "&copy; OpenStreetMap contributors",
    },
  ];

  const selectedStationData = stations.find((s) => s.id === selectedStation);
  const currentMapView = mapViews.find((v) => v.id === mapView);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 animate-gradient-shift">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <Link
            href="/analytics"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-all duration-300 mb-6 hover:scale-110 transform"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a Análisis
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up delay-200">
            Mapas Interactivos
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Visualización geoespacial de las estaciones de monitoreo del volcán
            Antisana
          </p>
        </div>

        {/* Map Controls */}
        <div className="max-w-6xl mx-auto mb-8 animate-fade-in-up delay-500">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Map View Selector */}
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Vista del Mapa:</span>
                {mapViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setMapView(view.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      mapView === view.id
                        ? "bg-blue-500/30 text-blue-200 border border-blue-400"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {view.icon} {view.name}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white">Activa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-white">Mantenimiento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-white">Inactiva</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2 animate-fade-in-up delay-700">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
              <div className="p-4 border-b border-white/20">
                <h2 className="text-xl font-bold text-white">
                  Mapa del Volcán Antisana -{" "}
                  {mapViews.find((v) => v.id === mapView)?.name}
                </h2>
              </div>

              {/* Real Leaflet Map */}
              <div className="relative h-96 lg:h-[500px]">
                {isClient && (
                  <DynamicMap
                    stations={stations}
                    volcanoCoords={volcanoCoords}
                    setSelectedStation={setSelectedStation}
                    mapView={currentMapView || mapViews[0]}
                  />
                )}

                {!isClient && (
                  <div className="flex items-center justify-center h-full bg-gray-200">
                    <div className="text-gray-600">Cargando mapa...</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Station Details Panel */}
          <div className="animate-fade-in-up delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 animate-pulse ${
                    selectedStationData?.status === "Activa"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>
                Detalles de la Estación
              </h3>

              {selectedStationData && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      {selectedStationData.name}
                    </h4>
                    <p className="text-blue-300 text-sm">
                      ID: {selectedStationData.id}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/20 p-3 rounded border border-white/10">
                      <p className="text-blue-300">Coordenadas</p>
                      <p className="text-white font-medium">
                        {selectedStationData.coords}
                      </p>
                    </div>
                    <div className="bg-black/20 p-3 rounded border border-white/10">
                      <p className="text-blue-300">Elevación</p>
                      <p className="text-white font-medium">
                        {selectedStationData.elevation}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-white">Última Lectura</h5>
                    <p className="text-xs text-blue-300">
                      {selectedStationData.lastReading}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-500/20 p-2 rounded">
                        <p className="text-blue-300">Nivel de Agua</p>
                        <p className="text-white font-bold">
                          {selectedStationData.waterLevel}
                        </p>
                      </div>
                      <div className="bg-red-500/20 p-2 rounded">
                        <p className="text-red-300">Temperatura</p>
                        <p className="text-white font-bold">
                          {selectedStationData.temperature}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
