# Changelog

## [v1.1.0] — 2026-03-12

> Cambios realizados desde el tag `v1.0.0` (2026-03-08)

---

### ✨ Features

- **Diagrama configurable por JSON** — El diagrama de infraestructura fue completamente refactorizado. Se reemplazó el componente estático `InfraDiagram.astro` por dos nuevos componentes (`Diagram.astro` y `DiagramNode.astro`) que renderizan los nodos y conexiones leyendo un fichero de datos `src/data/diagram/infraDiagram.json`. Esto permite modificar la topología del diagrama sin tocar código Astro.

---

### 🐛 Fixes

- **Filetype SO Linux** — Corregido el tipo de fichero para sistemas operativos Linux en los datos compartidos (`shared.ts`).
- **Filetag SO Linux** — Ajuste adicional en la etiqueta del tipo de fichero para Linux (`types.ts`, `shared.ts`).
- **Orden de archivos de estilos** — Los imports de CSS por componente ahora siguen un orden consistente en todos los layouts y componentes Astro.

---

### ♻️ Refactor / Updates

- **División de estilos globales en módulos por componente** — El fichero `global.css` (~2500 líneas) fue fragmentado en ficheros independientes bajo `src/styles/components/`:
  | Fichero | Descripción |
  |---|---|
  | `contact.css` | Estilos del componente Contact |
  | `focus.css` | Estilos del panel Focus |
  | `hero.css` | Estilos del Hero |
  | `ide-overlays.css` | Overlays del IDE (tabs, paneles, decoradores) |
  | `ide-shell.css` | Shell general del IDE |
  | `infra-diagram.css` | Diagrama de infraestructura |
  | `projects.css` | Tarjetas de proyectos |
  | `sidebar.css` | Barra lateral |
  | `topbar.css` | Barra superior |
  | `utilities.css` | Clases utilitarias globales |

- **Timeline** — Actualización del contenido de la sección de timeline en los ficheros de i18n (`en.ts`, `es.ts`).

- **README.md** — Revisión y actualización completa del README del proyecto.

---

### 📊 Estadísticas del diff

```
28 ficheros modificados
+3103 inserciones  /  -2687 eliminaciones
```

---

### 🗂 Archivos clave afectados

```
src/
├── components/
│   ├── Diagram.astro           (nuevo)
│   ├── DiagramNode.astro       (nuevo)
│   ├── InfraDiagram.astro      (eliminado)
│   └── IdeOverlays.astro       (actualizado)
├── data/
│   ├── diagram/
│   │   └── infraDiagram.json   (nuevo)
│   ├── content/
│   │   ├── en.ts               (actualizado)
│   │   ├── es.ts               (actualizado)
│   │   └── shared.ts           (actualizado)
│   └── types.ts                (actualizado)
└── styles/
    ├── global.css              (reducido drásticamente)
    ├── utilities.css           (nuevo)
    └── components/             (10 nuevos ficheros CSS)
```
