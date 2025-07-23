"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOpacity = Math.max(0.3, 1 - scrollY / 500);
  const parallaxY = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/antisana.jpg')",
          opacity: imageOpacity,
          transform: `translateY(${parallaxY}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-900/80"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-blue-200 transition-all duration-300 hover:scale-110 transform"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Volver al Inicio
          </Link>
          <div className="text-white font-bold text-xl">Volcán Antisana</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            Volcán
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Antisana
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up delay-400">
            Majestuoso volcán ubicado en la Cordillera Oriental de los Andes
            ecuatorianos
          </p>
        </div>

        {/* Video Section */}
        <section className="mb-16 animate-fade-in-up delay-600">
          <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Descubre el Antisana
            </h2>
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/BKXN-XCjr9A"
                title="Volcán Antisana - Ecuador"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Location & Geography */}
          <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 animate-fade-in-up delay-800 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Ubicación y Geografía
              </h3>
            </div>
            <div className="space-y-4 text-blue-200">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Coordenadas:</span>
                <span>0°28′48″S, 78°8′24″W</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Altitud:</span>
                <span>5,758 metros</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Provincia:</span>
                <span>Napo, Ecuador</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Cordillera:</span>
                <span>Oriental de los Andes</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                El Antisana es el cuarto volcán más alto del Ecuador, ubicado en
                la Cordillera Oriental de los Andes, aproximadamente a 50 km al
                sureste de Quito.
              </p>
            </div>
          </section>

          {/* Geological Features */}
          <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 animate-fade-in-up delay-1000 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Características Geológicas
              </h3>
            </div>
            <div className="space-y-4 text-blue-200">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Tipo:</span>
                <span>Estratovolcán</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Estado:</span>
                <span>Activo</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Última erupción:</span>
                <span>1801-1802</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Composición:</span>
                <span>Andesítica a Dacítica</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                El Antisana presenta actividad fumarólica y ha tenido erupciones
                históricas documentadas. Su estructura está dominada por un gran
                glaciar que cubre su cumbre.
              </p>
            </div>
          </section>
        </div>

        {/* Climate & Ecosystem */}
        <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 mb-16 animate-fade-in-up delay-1200 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Clima y Ecosistema
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">
                Características Climáticas
              </h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Clima frío de alta montaña
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Temperatura promedio: -2°C a 8°C
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Precipitación: 1,000-2,000 mm/año
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Presencia de glaciares permanentes
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">
                Biodiversidad
              </h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Páramo andino y super páramo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Cóndor andino (Vultur gryphus)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Oso de anteojos (Tremarctos ornatus)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Flora endémica de alta montaña
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hydrological Importance */}
        <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 mb-16 animate-fade-in-up delay-1400 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Importancia Hidrológica
            </h3>
          </div>
          <div className="text-blue-200 space-y-6">
            <p className="text-lg leading-relaxed">
              El volcán Antisana es una fuente crucial de recursos hídricos para
              Ecuador, especialmente para la ciudad de Quito y las comunidades
              circundantes. Sus glaciares y sistemas de páramo actúan como
              reguladores naturales del ciclo hidrológico.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-300">40%</span>
                </div>
                <p className="text-sm">Abastecimiento de agua a Quito</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-300">15</span>
                </div>
                <p className="text-sm">Microcuencas principales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-300">3</span>
                </div>
                <p className="text-sm">Estaciones de monitoreo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research and Conservation */}
        <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-white/20 mb-16 animate-fade-in-up delay-1600 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Investigación y Conservación
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">
                Estudios Actuales
              </h4>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Monitoreo sísmico y volcánico continuo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>
                    Análisis de retroceso glaciar debido al cambio climático
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Estudios hidrológicos y de calidad del agua</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Investigación de biodiversidad de páramo</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">
                Esfuerzos de Conservación
              </h4>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Reserva Ecológica Antisana (120,000 ha)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Programas de restauración de páramo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Educación ambiental comunitaria</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Turismo sostenible y científico</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up delay-1800">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explora Nuestro Sistema de Monitoreo
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Descubre cómo utilizamos tecnología avanzada para monitorear y
            predecir las fluctuaciones hídricas del Antisana
          </p>
          <Link
            href="/analytics"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Explorar Análisis de Datos
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-200">
            © 2025 Proyecto Antisana - Monitoreo Hidrométrico Ecuador
          </p>
        </div>
      </footer>
    </div>
  );
}
