import Link from "next/link";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 animate-gradient-shift">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <Link
            href="/"
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
            Volver al inicio
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up delay-200">
            Análisis de Datos
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Plataforma de visualización y análisis predictivo para las
            estaciones de monitoreo del volcán Antisana
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto text-center animate-scale-in delay-500">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in-up delay-700">
            Herramientas de Análisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Link href="/analytics/predictive-models" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[900ms] group cursor-pointer">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-400 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  Modelos Predictivos
                </h3>
                <p className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 text-lg">
                  Predicción de fluctuaciones hídricas con Machine Learning
                </p>
              </div>
            </Link>

            <Link href="/analytics/interactive-maps" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1000ms] group cursor-pointer">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-200 transition-colors duration-300">
                  Mapas Interactivos
                </h3>
                <p className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 text-lg">
                  Ubicación y estado de las estaciones en tiempo real
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Stations Info */}
        <div className="mt-16 animate-fade-in-up delay-[1200ms]">
          <h2 className="text-2xl font-bold text-white text-center mb-8 hover:scale-105 transition-transform duration-300">
            Estaciones de Monitoreo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1300ms] group">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                P42-Antisana
              </h3>
              <p className="text-blue-200 mb-3 font-medium">Ramón Huañuna</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Estado:</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs animate-pulse">
                  Activa
                </span>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1400ms] group">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                P43-Antisana
              </h3>
              <p className="text-blue-200 mb-3 font-medium">Limboasi</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Estado:</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs animate-pulse">
                  Activa
                </span>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-[1500ms] group">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                P55-Antisana
              </h3>
              <p className="text-blue-200 mb-3 font-medium">Diguchi</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Estado:</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs animate-pulse">
                  Activa
                </span>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
