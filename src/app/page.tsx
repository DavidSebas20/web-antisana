"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOpacity = Math.max(0.2, 1 - scrollY / 400);
  const imageScale = Math.max(1, 1 + scrollY / 5000);
  const overlayOpacity = Math.min(0.8, 0.4 + scrollY / 800);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden animate-gradient-shift">
      {/* Antisana Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: "url('/antisana.jpg')",
          opacity: imageOpacity,
          transform: `scale(${imageScale})`,
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-900/80 transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-blue-800/20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-200/30 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-float delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 animate-fade-in-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl transform hover:scale-110 transition-transform duration-300">
            Estación Antisana
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <a
              href="#about"
              className="hover:text-blue-200 transition-all duration-300 hover:scale-110 transform"
            >
              Acerca de
            </a>
            <a
              href="#stations"
              className="hover:text-blue-200 transition-all duration-300 hover:scale-110 transform"
            >
              Estaciones
            </a>
            <a
              href="#research"
              className="hover:text-blue-200 transition-all duration-300 hover:scale-110 transform"
            >
              Investigación
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up delay-300 mt-16 drop-shadow-2xl">
            Estación
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent animate-gradient-shift drop-shadow-lg">
              Antisana
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-500 drop-shadow-lg font-medium"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.6)",
            }}
          >
            Monitoreo avanzado de estaciones hidrométricas para la predicción de
            fluctuaciones del agua en el ecosistema del Antisana, Ecuador
          </p>

          {/* Description */}
          <div className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-700">
            <p className="mb-4 drop-shadow-md font-medium bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-xl">
              Proyecto de investigación enfocado en el análisis de datos de las
              estaciones de monitoreo de agua ubicadas en el volcán Antisana,
              utilizando técnicas de minería de datos y machine learning para
              predecir patrones de fluctuación hídrica.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="mb-16 animate-scale-in delay-[900ms]">
            <Link
              href="/analytics"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-3xl animate-pulse-glow"
            >
              <svg
                className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300"
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
              <span className="group-hover:tracking-wide transition-all duration-300">
                Explorar Análisis de Datos
              </span>
            </Link>
          </div>

          {/* Monitoring Stations */}
          <section id="stations" className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-white/30 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1000ms] group shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                P42-Antisana
              </h3>
              <p className="text-blue-200 mb-2 font-medium">Ramón Huañuna</p>
              <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                Estación de monitoreo hidrométrico ubicada en la zona norte del
                volcán
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-white/30 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1200ms] group shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                P43-Antisana
              </h3>
              <p className="text-blue-200 mb-2 font-medium">Limboasi</p>
              <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                Estación estratégica para el análisis de caudales en la región
                central
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-white/30 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1400ms] group shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                P55-Antisana
              </h3>
              <p className="text-blue-200 mb-2 font-medium">Diguchi</p>
              <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                Punto de control hidrodinámico en la vertiente sur del volcán
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </section>

          {/* Research Overview */}
          <section
            id="research"
            className="text-center animate-fade-in-up delay-[1600ms]"
          >
            <h2 className="text-3xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
              Objetivos de Investigación
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/25 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-black/35 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group shadow-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-400 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
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
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  Minería de Datos
                </h3>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                  Análisis profundo de patrones históricos en los datos de
                  caudal y precipitación
                </p>
              </div>
              <div className="bg-black/25 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-black/35 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group shadow-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">
                  Predicción
                </h3>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                  Modelos predictivos para anticipar fluctuaciones hídricas y
                  riesgos ambientales
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-white/10 py-8 animate-fade-in-up delay-[1800ms]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-200 hover:text-blue-100 transition-colors duration-300">
            © 2025 Proyecto Antisana - Universidad de Ecuador
          </p>
        </div>
      </footer>
    </div>
  );
}
