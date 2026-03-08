# portfolio — IRB IDE

> Portfolio personal construido como un IDE interactivo al estilo VS Code, con tema neon, animaciones CRT de televisión, soporte bilingüe y efectos en CSS puro.

---

## Vista general

__portfolio_IRB__ simula un entorno de escritorio IDE en el navegador. Incluye una barra de menú real con dropdowns, explorador de archivos lateral, navegación por pestañas, barra de estado, diálogos de atajos de teclado y transiciones cinematográficas — todo sin ningún framework de UI.

El IDE puede abrirse, minimizarse y cerrarse. En la primera carga muestra una pantalla de inicio con animación de entrada escalonada. Al abrir o restaurar se ejecuta el efecto de expansión CRT (`clip-path`). Al minimizar se ejecuta el efecto inverso de apagado.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) v5 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS + animaciones CSS puras |
| Fuentes | JetBrains Mono, Material Symbols |
| Iconos | Font Awesome 6 |
| Routing | i18n file-based de Astro (`/` ES · `/en/` EN) |

---

## Características

### Shell del IDE

- **TopBar** — Barra de menú completa con File / Edit / View / Go / Run / Terminal / Help, cada uno con atajos y acciones reales
- **Sidebar** — Árbol explorador de archivos colapsable con estructura de carpetas y etiquetas de tipo de archivo
- **Tab bar** — Pestañas de archivo que siguen la sección activa
- **Status bar** — Rama git, idioma, codificación e indicadores de posición

### Overlays y estados

- __Pantalla cerrada__ — Pantalla de inicio por defecto con logo IRB\_Network, icono terminal y botón Open, con animación de entrada escalonada
- **Minimizar** — Animación CRT de apagado (`clip-path: inset`) hacia un chip en la taskbar; restaurar dispara la animación de arranque
- **Debug bar** — Se activa desde Run → Start Debugging, muestra un indicador de breakpoint con pulso
- **Banner de selección** — Aparece al seleccionar elementos en cualquier sección, con contador y Esc para deseleccionar
- **Find bar** — `Ctrl+F` abre una barra de búsqueda inline con contador de coincidencias

### Animaciones

- **TV Boot** (`ideTvBoot`) — Expansión `clip-path: inset(50% → 0%)` al abrir/restaurar
- **TV Shutdown** (`ideTvShutdown`) — Colapso `clip-path: inset(0% → 50%)` al minimizar
- **Intro escalonado** — En la primera carga, cada elemento de la pantalla cerrada se desliza secuencialmente a opacidad completa (sin salto de iluminación neon)
- **Persistencia de sesión** — `sessionStorage` mantiene el IDE abierto entre cambios de idioma; la animación TV solo se dispara en open/restore explícito

### Diálogos

- **Atajos de teclado** — Referencia categorizada (Archivo, Editor, Vista, Debug, Ayuda) en dos columnas
- **Acerca de** — Info de la app con colores de marca de cada tecnología, nombre del desarrollador, links a GitHub y LinkedIn

### Sistema de selección

- Click para seleccionar elementos en cualquier sección (Hero, Contact, Stack, Focus, Timeline)
- `Ctrl+A` selecciona todos los elementos visibles
- Cada sección tiene su propio tratamiento visual `.is-selected`:
   - **Hero** — Barra izquierda cyan, sin outline (estilo fila de editor)
   - **Contact** — `inset box-shadow` barra izquierda + glow de borde
   - **Stack** — Variable `--domain-color` por tarjeta para fondo, outline y sombra en el color del dominio
   - **Focus / Timeline** — Barra izquierda en el color de acento de la tarjeta

### i18n

- Dos locales: `es` (por defecto, `/`) y `en` (`/en/`)
- Todo el copy de UI, etiquetas de menú, contenido de secciones y textos de diálogos están traducidos
- El cambio de idioma preserva el estado del IDE — sin re-animación

---

## Estructura del proyecto

```ini
src/
├── components/
│   ├── Hero.astro              # portfolio.ts — intro y barra de skills
│   ├── Focus.astro             # focus.md — principios y filosofía
│   ├── Stack.astro             # stack.yml — tarjetas de dominios tecnológicos
│   ├── Projects.astro          # projects.db — tarjetas de proyectos
│   ├── Timeline.astro          # timeline.log — experiencia y formación
│   ├── Contact.astro           # contact.sh — links de contacto
│   ├── TopBar.astro            # Barra de menú del IDE
│   ├── Sidebar.astro           # Menu lateral
│   ├── ExplorerTreeNode.astro  # Nodo del árbol explorador
│   ├── StatusBar.astro         # Barra de estado inferior
│   └── IdeOverlays.astro       # Todos los overlays: pantalla cerrada, barra minimizar,
│                               #   debug bar, banner selección, modales, find bar
├── data/
│   ├── content/
│   │   ├── en.ts               # Datos del portfolio en inglés + UI copy
│   │   ├── es.ts               # Datos del portfolio en español + UI copy
│   │   └── shared.ts           # Constantes compartidas: tech meta, dominios, árbol explorador
│   ├── types.ts                # Interfaces TypeScript
│   └── content.ts              # Fachada ContentStore
├── layouts/
│   └── Layout.astro            # Layout raíz — monta el shell del IDE
├── pages/
│   ├── index.astro             # Redirect ES /
│   └── [lang].astro            # Ruta en /en/ o es /es/
├── scripts/
│   ├── overlays.ts             # Lógica IDE open/close/minimize, animaciones TV, diálogos
│   ├── topbar.ts               # Acciones de menú, handlers de atajos de teclado
│   └── ide.ts                  # Sidebar, selección, find bar
└── styles/
    └── global.css              # CSS completo: tema neon, animaciones, componentes

```

---

## Atajos de teclado

| Acción | Atajo |
|---|---|
| Guardar | `Ctrl+S` |
| Cerrar IDE | `Ctrl+W` |
| Deshacer | `Ctrl+Z` |
| Rehacer | `Ctrl+Y` |
| Seleccionar todo | `Ctrl+A` |
| Deseleccionar | `Esc` |
| Buscar en archivo | `Ctrl+F` |
| Toggle Explorador | `Ctrl+B` |
| Toggle Terminal | `Ctrl+`` |
| Pantalla completa | `F11` |
| Iniciar debug | `F5` |
| Detener debug | `Shift+F5` |
| Atajos de teclado | `Ctrl+K Ctrl+S` |

---

## Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

```

---

## Personalización

Edita los archivos en `src/data/content/` con tu información:

- `es.ts` / `en.ts` → `portfolio.personal`: nombre, rol, ubicación, email, redes sociales
- `es.ts` / `en.ts` → `portfolio.skills`: habilidades con porcentaje y color
- `es.ts` / `en.ts` → `portfolio.projects`: proyectos con links y highlights
- `es.ts` / `en.ts` → `portfolio.timeline`: experiencia y formación
- `shared.ts` → `sharedSkillDomainDefs`: dominios tecnológicos y skills por dominio

---

## Colores del tema neon

| Variable | Color | Uso |
|---|---|---|
| `--neon-cyan` | `#59d8ff` | Acciones principales, cursor, selección |
| `--neon-pink` | `#ff7ab6` | Proyectos, alertas |
| `--neon-purple` | `#9f93ff` | Secundario, decoración |
| `--neon-green` | `#67f7bf` | Estado activo, éxito |
| `--neon-yellow` | `#ffd36b` | Stack DevOps, advertencias |

---

## Autor

**Ivan Ramon Bolsa** — Full-Stack Developer, Zaragoza, Spain

- GitHub: [github.com/ivantatsu](https://github.com/ivantatsu)
- LinkedIn: [linkedin.com/in/ivanramon](https://linkedin.com/in/ivanramon)
- Email: ivanramonbolsa@gmail.com

---

## Licencia

MIT
