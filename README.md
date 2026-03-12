<div align="center">
  <h1>portfolio — IRB IDE</h1>
  <p><strong>⚡️ Neon UI · Anims · IDE interactions</strong></p>
  <p>
    <a href="https://astro.build"><img alt="Astro" src="https://img.shields.io/badge/Astro-5-0C1222?logo=astro&logoColor=white&labelColor=8b5cf6" /></a>&nbsp;
    <a href="https://www.typescriptlang.org"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-0C1222?logo=typescript&logoColor=white&labelColor=175CFF" /></a>&nbsp;
    <a href="https://tailwindcss.com"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3-0C1222?logo=tailwindcss&logoColor=white&labelColor=3CD0DE" /></a>&nbsp;
    <a href="https://astro.build/guide/i18n/"><img alt="i18n" src="https://img.shields.io/badge/i18n-ES%20%2F%20EN-0C1222?logo=googletranslate&logoColor=white&labelColor=DB8300" /></a>&nbsp;
    <img alt="License" src="https://img.shields.io/badge/License-MIT-0C1222" />
  </p>
  <p><em>“Un portfolio que se siente como un editor real.”</em></p>
</div>

---

## Índice

- [Vista general](#vista-general)
- [Experiencia IDE](#experiencia-ide)
- [Efectos neon](#efectos-neon)
- [Paleta neon](#paleta-neon)
- [Diagrama JSON (Infra)](#diagrama-json-infra)
- [Stack](#stack)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Personalización rápida](#personalización-rápida)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Vista general

__portfolio_IRB__ simula un escritorio IDE completo en el navegador: barra de menús, explorador de archivos, pestañas, barra de estado, diálogos modales y animaciones CRT. Todo sin frameworks de UI.

Incluye:

- 🚀 Apertura, minimizado y cierre con animación TV (boot/shutdown).
- 🌍 i18n ES/EN con estado persistente entre cambios de idioma.
- 🎛️ Interacciones estilo IDE: selección, atajos, debug bar y find bar.
- 🧭 Diagrama de infraestructura configurable por JSON sin perder estética.
- 🧩 Estilos modulados por componente para mantener el look neon consistente.

> [!TIP]
> Puede verlo en ejecución en <a href="https:ivanramon.es" target="_blank">ivanramon.es<a>

---

## Experiencia IDE

```txt
IRB IDE • neon • CRT • Astro
```

<details>
<summary><strong>Shell del IDE</strong></summary>

- Barra de menús completa con acciones reales.
- Sidebar con árbol de archivos colapsable.
- Tab bar sincronizada con la sección activa.
- Status bar con branch, idioma y estado.

</details>

<details>
<summary><strong>Overlays y estados</strong></summary>

- Pantalla cerrada con animación escalonada y botón Open.
- Minimizado con CRT shutdown y restauración TV boot.
- Debug bar activa desde Run → Start Debugging.
- Banner de selección + contador con Esc para deseleccionar.
- Find bar inline con contador de coincidencias.

</details>

<details>
<summary><strong>Animaciones</strong></summary>

- `ideTvBoot`: expansión CRT con `clip-path`.
- `ideTvShutdown`: colapso CRT con `clip-path`.
- Intro escalonado en la pantalla cerrada.
- Persistencia de sesión con `sessionStorage`.

</details>

---

## Efectos neon

Capa de estilos modular para mantener el look y facilitar cambios sin romper el diseño:

- `src/styles/global.css`: reset, tokens base y fondo.
- `src/styles/utilities.css`: utilidades compartidas y efectos (neon, card-hover, selection).
- `src/styles/components/*`: estilos específicos por componente.

> [!NOTE]
> Esta separación permite tocar un componente sin romper el resto del look.

FX destacados:

- ✨ Glow suave en enlaces y estados activos.
- 📺 CRT boot/shutdown con recorte y distorsión suave.
- 🪄 Hover con elevación, mezcla de color y halo neon.

---

## Paleta neon

| Variable | Color | Uso |
|---|---|---|
| `--neon-cyan` | `#59d8ff` | Acciones principales, cursor, selección |
| `--neon-pink` | `#ff7ab6` | Proyectos, alertas |
| `--neon-purple` | `#9f93ff` | Secundario, decoración |
| `--neon-green` | `#67f7bf` | Estado activo, éxito |
| `--neon-yellow` | `#ffd36b` | DevOps, advertencias |

---

## Diagrama JSON

Los diagramas son configurables vía JSON (flechas, estilos, colores y nodos), sin perder el estilo visual original.

Ejemplo:

- Config: `src/data/diagram/infraDiagram.json`
- Componente: `src/components/Diagram.astro`

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro v5 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS + CSS puro |
| Iconos | Font Awesome + Material Symbols |
| Fuentes | JetBrains Mono |
| i18n | Rutas `/` (ES) y `/en/` (EN) |

---

## Estructura del proyecto

```ini
src/
├── components/
│   ├── Hero.astro
│   ├── Focus.astro
│   ├── Stack.astro
│   ├── Projects.astro
│   ├── Timeline.astro
│   ├── Contact.astro
│   ├── TopBar.astro
│   ├── Sidebar.astro
│   ├── StatusBar.astro
│   ├── IdeOverlays.astro
│   └── Diagram.astro
├── data/
│   ├── content/
│   │   ├── en.ts
│   │   ├── es.ts
│   │   └── shared.ts
│   ├── diagram/
│   │   └── infraDiagram.json
│   └── types.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── [lang].astro
├── scripts/
│   ├── overlays.ts
│   ├── topbar.ts
│   └── ide.ts
└── styles/
    ├── global.css
    ├── utilities.css
    └── components/
        ├── hero.css
        ├── focus.css
        ├── contact.css
        ├── projects.css
        ├── topbar.css
        ├── sidebar.css
        ├── ide-shell.css
        ├── ide-overlays.css
        └── infra-diagram.css
```

---

## Instalación

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## Personalización rápida

Edita:

- `src/data/content/es.ts` y `src/data/content/en.ts` para nombre, roles, links y textos.
- `src/data/content/shared.ts` para dominios y metadatos técnicos.

---

## Autor

**Ivan Ramon Bolsa** — Full-Stack Developer, Zaragoza, Spain

- GitHub: [github.com/ivantatsu](https://github.com/ivantatsu)
- LinkedIn: [linkedin.com/in/ivanramon](https://linkedin.com/in/ivanramon)
- Email: ivanramonbolsa@gmail.com

---

## Licencia

MIT
