# Plan de Rework de Layouts - Frontend

## Objetivo
Crear una estructura de layouts coherente y moderna usando componentes de shadcn/ui disponibles en la carpeta `ui/apps/v4`.

## Componentes Disponibles de shadcn/ui

### Navegación
- `navigation-menu` - Menú de navegación con dropdowns
- `breadcrumb` - Migas de pan para navegación jerárquica
- `sidebar` - Múltiples variantes (sidebar-01 a sidebar-16)

### Lay
card` - Tarjetas con header, content, footer
- `separator` - Separadores visuales
- `button` - Botones con múltiples variantes
- `avatar` - Avatares de usuario
- `dropdown-menu` - Menús desplegabl
## Formularios y Inputs
- `input` - Campos de entrada
- `label` - Etiquetas
- `select` - Selectores
- `textarea` - Áreas de texto

## Estructura Propuesta

```
frontend/src/
├── components/
│   ├── ui/              # Componentes base de shadcn
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── navigation-menu.jsx
│   │   ├── breadcrumb.jsx
│   │   ├── separator.jsx
│   │   ├── avatar.jsx
│   │   └── dropdown-menu.jsx
│   │
│   ├── layout/          # Componentes de layout
│   │   ├── AppHeader.jsx       # Header principal con navegación
│   │   ├── AppFooter.jsx       # Footer
│   │   ├── PageHeader.jsx      # Header de página con breadcrumb
│   │   └── Container.jsx       # Contenedor responsive
│   │
│   └── sections/        # Secciones reutilizables
│       ├── Hero.jsx
│       ├── Features.jsx
│       └── Stats.jsx
│
├── layouts/
│   ├── MainLayout.jsx   # Layout principal con header/footer
│   └── DashboardLayout.jsx  # Layout para dashboard (futuro)
│
└── pages/
    ├── LandingPage.jsx
    └── GalleryPage.jsx
```

## Componentes a Instalar

1. **Componentes UI Base:**
   - button
   - card
   - navigation-menu
   - breadcrumb
   - separator
   - avatar
   - dropdown-menu
   - badge
   - input
   - label

2. **Hooks:**
   - use-mobile (para responsive)

## Pasos de Implementación

### Fase 1: Instalar Componentes Base
1. Instalar componentes de shadcn/ui necesarios
2. Configurar aliases en jsconfig.json si es necesario

### Fase 2: Crear Componentes de Layout
1. AppHeader - Navegación principal moderna
2. AppFooter - Footer consistente
3. PageHeader - Header de página con breadcrumb
4. Container - Contenedor responsive

### Fase 3: Refactorizar Layouts Existentes
1. MainLayout - Usar nuevos componentes
2. Actualizar Navbar para usar navigation-menu

### Fase 4: Actualizar Páginas
1. LandingPage - Usar nuevos componentes de layout
2. GalleryPage - Aplicar estructura consistente

## Principios de Diseño

1. **Consistencia**: Todos los layouts usan los mismos componentes base
2. **Responsive**: Mobile-first con breakpoints consistentes
3. **Accesibilidad**: Componentes accesibles por defecto
4. **Modularidad**: Componentes reutilizables y composables
5. **Mantenibilidad**: Código limpio y bien organizado

## Beneficios

- ✅ Diseño coherente en toda la aplicación
- ✅ Componentes reutilizables y testeados
- ✅ Mejor experiencia de usuario
- ✅ Más fácil de mantener y escalar
- ✅ Responsive por defecto
- ✅ Accesible por defecto
