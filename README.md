# Salud en Cada Bocado

Una aplicación web moderna sobre mala alimentación y venta de productos saludables construida con React, TypeScript, Vite y Tailwind CSS.

## Características

- ✅ **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y desktops
- 🛒 **Carrito de Compras**: Sistema completo de carrito con agregar, eliminar y actualizar cantidad
- 🏷️ **Filtrado por Categorías**: Filtra productos por categorías
- 💳 **Sistema de Precios**: Cálculo automático de totales
- 🎨 **UI Moderna**: Diseño con gradientes y animaciones suaves
- 📱 **Mobile First**: Optimizado para dispositivos móviles
- ⚡ **Rendimiento**: Compilación rápida con Vite

## Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos CSS
- **PostCSS & Autoprefixer** - Procesamiento CSS

## Instalación

1. Navega a la carpeta del proyecto:
```bash
cd d:\Programacion\saludEnCadaBocado
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

## Build

Para compilar la aplicación para producción:
```bash
npm run build
```

Para previsualizar la compilación:
```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
index.html           # Archivo HTML principal
vite.config.ts       # Configuración de Vite
tailwind.config.js   # Configuración de Tailwind
postcss.config.js    # Configuración de PostCSS
tsconfig.json        # Configuración de TypeScript
package.json         # Dependencias y scripts
```

## Características Principales

### Hero Section
Sección introductoria atractiva con llamado a la acción

### Beneficios de la Alimentación Saludable
Información sobre por qué cambiar hábitos alimenticios

### Catálogo de Productos
- 6 productos saludables con categorías
- Información de beneficios por producto
- Emojis representativos
- Filtrado por categoría

### Carrito de Compras
- Agregar productos
- Eliminar productos
- Actualizar cantidades
- Cálculo automático de totales
- Contador en la navbar

### Tips Saludables
Consejos para mejorar la salud

## Productos Disponibles

1. Ensalada Verde Orgánica - $12.99
2. Proteína en Polvo Natural - $34.99
3. Frutas Secas Variadas - $18.99
4. Té Verde Antioxidante - $9.99
5. Yogur Griego Sin Azúcar - $7.99
6. Granola Casera - $13.99

## Mejoras Futuras

- Integración con API de pago (Stripe, PayPal)
- Sistema de autenticación de usuarios
- Perfil de usuario con historial de compras
- Sistema de reseñas y calificaciones
- Blog con recetas saludables
- Chatbot de atención al cliente
- Promociones y descuentos dinámicos
- Integración con redes sociales

## Licencia

Este proyecto está disponible para uso educativo y comercial.

---

**Autor**: Salud en Cada Bocado  
**Año**: 2025
