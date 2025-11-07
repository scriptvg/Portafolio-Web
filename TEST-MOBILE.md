# Test de Responsividad Móvil

## Cambios Aplicados para Corregir el Problema

### 1. Hero Component
- ✅ Reducido tamaño de fuente del título en móvil: `text-2xl` (antes `text-3xl`)
- ✅ Agregado `break-words` para permitir saltos de línea
- ✅ Cambiado `tracking-tighter` a `tracking-tight` (menos compresión)
- ✅ Agregado padding horizontal al contenedor principal
- ✅ Simplificados los botones (solo 2 en móvil)
- ✅ Reducida altura mínima en móvil: `min-h-[500px]`

### 2. App.css
- ✅ Agregado `word-wrap: break-word` a todos los encabezados
- ✅ Agregado `overflow-wrap: break-word` para texto largo
- ✅ Agregado `hyphens: auto` para mejor separación

### 3. LandingPage
- ✅ Agregado `w-full` al ScrollArea
- ✅ Agregado `overflow-x-hidden` al contenedor principal

## Cómo Probar

### En Chrome DevTools:
1. Presiona F12
2. Presiona Ctrl+Shift+M (Toggle Device Toolbar)
3. Selecciona "iPhone SE" (375px de ancho)
4. Verifica que:
   - El nombre completo se ve sin cortarse
   - No hay scroll horizontal
   - Los botones son clickeables
   - El texto es legible

### En Dispositivo Real:
1. Despliega a Netlify/Vercel
2. Abre en tu móvil
3. Verifica que todo se ve correctamente

## Tamaños de Fuente Actualizados

### Título Principal (Nombre):
- Móvil (< 475px): `text-2xl` (1.5rem / 24px)
- XS (475px+): `text-3xl` (1.875rem / 30px)
- SM (640px+): `text-4xl` (2.25rem / 36px)
- MD (768px+): `text-5xl` (3rem / 48px)
- LG (1024px+): `text-6xl` (3.75rem / 60px)

### Subtítulo (Desarrollador Full Stack):
- Móvil: `text-lg` (1.125rem / 18px)
- XS: `text-xl` (1.25rem / 20px)
- SM: `text-2xl` (1.5rem / 24px)
- MD: `text-3xl` (1.875rem / 30px)

## Comandos para Deploy

```bash
# Build
pnpm build

# Verificar localmente
pnpm preview
# Abrir http://localhost:4173 en Chrome DevTools modo móvil

# Deploy
vercel --prod
# o
netlify deploy --prod
```

## Checklist de Verificación

Después de desplegar, verifica en móvil:
- [ ] El nombre completo "Allan José Vélez González" se ve completo
- [ ] No hay scroll horizontal
- [ ] El badge de "Costa Rica" se ve correctamente
- [ ] Los botones "LinkedIn" y "Contactar" son clickeables
- [ ] El texto descriptivo es legible
- [ ] El navbar se ve correctamente
- [ ] El menú hamburguesa funciona
- [ ] Todas las secciones son accesibles

## Si Aún Hay Problemas

### Problema: Texto aún se corta
**Solución temporal**: Reducir más el tamaño de fuente
```jsx
className="text-xl xs:text-2xl sm:text-3xl md:text-4xl"
```

### Problema: Scroll horizontal persiste
**Solución**: Verificar en DevTools qué elemento causa el overflow
```bash
# En consola del navegador:
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log(el);
  }
});
```

### Problema: Navbar muy grande
**Solución**: Ya está configurado con `inset-x-2` en móvil (8px de margen)

## Contacto de Soporte

Si después de estos cambios aún hay problemas:
1. Toma screenshot del problema
2. Indica el dispositivo/navegador
3. Indica el ancho de pantalla (en DevTools)
4. Describe qué elemento específico causa problema
