# Volcán Antisana - Monitoreo Hidrométrico

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en Next.js para el análisis y monitoreo de las estaciones hidrométricas del volcán Antisana en Ecuador. El objetivo principal es implementar técnicas de minería de datos y machine learning para predecir fluctuaciones en los niveles de agua de las siguientes estaciones de monitoreo:

- **P42-Antisana Ramón Huañuna** - Estación norte del volcán
- **P43-Antisana Limboasi** - Estación central para análisis de caudales
- **P55-Antisana Diguchi** - Punto de control en la vertiente sur

## Características Principales

- 🌋 **Landing Page Moderna**: Información detallada sobre el volcán Antisana y las estaciones de monitoreo
- 📊 **Análisis de Datos**: Plataforma para visualización de métricas y datos históricos (próximamente)
- 🤖 **Modelos Predictivos**: Implementación de algoritmos de machine learning para predicción de fluctuaciones
- 🗺️ **Mapas Interactivos**: Ubicación geográfica de las estaciones de monitoreo
- 📱 **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop

## Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS para diseño responsivo
- **React** - Biblioteca de componentes de interfaz de usuario

## Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. Clona el repositorio:

```bash
git clone [URL_DEL_REPOSITORIO]
cd web
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```
src/
├── app/
│   ├── analytics/          # Página de análisis de datos
│   │   └── page.tsx
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx           # Landing page
└── components/            # Componentes reutilizables (futuro)
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter ESLint

## Funcionalidades Planificadas

### Fase 1 - Fundación (Actual)

- [x] Landing page con información del volcán
- [x] Diseño responsivo y moderno
- [x] Estructura base del proyecto
- [x] Página de analytics placeholder

### Fase 2 - Análisis de Datos

- [ ] Integración con APIs de datos meteorológicos
- [ ] Dashboards interactivos con gráficas
- [ ] Visualización de datos históricos
- [ ] Métricas en tiempo real

### Fase 3 - Modelos Predictivos

- [ ] Implementación de algoritmos de machine learning
- [ ] Predicción de fluctuaciones hídricas
- [ ] Alertas tempranas
- [ ] Análisis de tendencias

### Fase 4 - Mapas y Geolocalización

- [ ] Integración con mapas interactivos
- [ ] Ubicación precisa de estaciones
- [ ] Visualización geoespacial de datos
- [ ] Capas de información geológica

## Contribución

Este es un proyecto académico de investigación. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## Licencia

Este proyecto es parte de una investigación académica de la Universidad de Ecuador.

## Contacto

Proyecto desarrollado para el análisis del ecosistema hidrológico del volcán Antisana, Ecuador.

---

**Nota**: Este proyecto está en desarrollo activo. Las funcionalidades de análisis de datos y predicción estarán disponibles en las próximas actualizaciones.
