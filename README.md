# 🚀 DAI Web Next Starter

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Supabase-SSR-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Code_Style-Single_Quotes-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Single Quotes" />
</p>

---

La página web de la **Delegación de Alumnado de la EEI (DAI)**, moderna y rápida en **Next.js 16 (App Router)** con **React 19**, **Tailwind CSS v4**, **TypeScript** e integración completa de **Supabase (SSR & Browser)**.

---

## ⚡ Características Principales

- ⚡ **Next.js 16 & Turbopack**: Rendimiento extremo y carga instantánea.
- 🎨 **Tailwind CSS v4**: Estilos de última generación basados en `@import "tailwindcss";`.
- 🔐 **Supabase SSR Suite**: Clientes configurados para componentes de servidor (`Server Components`), acciones de servidor (`Server Actions`), cliente de navegador (`Client Components`) y gestión de sesiones mediante `middleware`.
- 💡 **TypeScript Estricto**: Tipado completo para un desarrollo libre de errores.
- 🎯 **Estilo de Código Estandarizado**: Configuración con `.prettierrc`, `.editorconfig` y `.vscode/settings.json` para garantizar el uso de **comillas simples (`'`)** en todo el proyecto.
- 🛠️ **Utilidades UI Integradas**: `clsx`, `tailwind-merge` (`cn()`) y `lucide-react` para iconos modernos.

---

## 📁 Estructura del Proyecto

```tree
dai_web_next/
├── .vscode/                  # Configuración de formateo en VS Code (Single Quotes)
├── src/
│   ├── app/                  # Rutas de la aplicación (App Router)
│   │   ├── admin/            # Panel de administración (Estadísticas, Eventos, Impresora, Inventario, Logs, Préstamo, Taquillas, Usuarios)
│   │   │   ├── estadisticas/
│   │   │   ├── eventos/
│   │   │   ├── impresora/    # Gestión de servicios de impresión e historial
│   │   │   ├── inventario/   # Gestión de inventario e historial
│   │   │   ├── logs/         # Registros de actividad del sistema
│   │   │   ├── prestamo/     # Gestión de préstamos del material e historial
│   │   │   ├── taquillas/    # Control e inventario de taquillas
│   │   │   └── usuarios/     # Gestión de permisos y roles de usuarios
│   │   ├── auth/             # Autenticación y callbacks (Login, Auth Callback)
│   │   │   ├── callback/
│   │   │   └── login/
│   │   ├── ayuda/            # Preguntas frecuentes y centro de ayuda
│   │   ├── normativas/       # Documentación y reglamentos universitarios/DAI
│   │   ├── nosotros/         # Información institucional (Miembros y Sobre Nosotros)
│   │   │   ├── miembros/
│   │   │   └── sobre-nosotros/
│   │   ├── patron/           # Información y gestión de eventos de la festividad del patrón
│   │   ├── perfil/           # Perfil de usuario y ajustes de cuenta
│   │   │   └── configuracion/
│   │   ├── servicios/        # Catálogo de servicios disponibles para los alumnos
│   │   ├── globals.css       # Configuración de estilos globales Tailwind v4
│   │   ├── layout.tsx        # Layout raíz con fuente Inter y FondoAzulMistico global
│   │   └── page.tsx          # Página principal / Landing
│   ├── components/           # Componentes de la aplicación
│   │   ├── common/           # Componentes genéricos compartidos (FondoAzulMistico)
│   │   │   └── FondoAzulMistico.tsx # Componente de fondo místico con nebulosas y estrellas
│   │   ├── ui/               # Componentes atómicos de UI (Botones, Inputs, Modales...)
│   │   ├── admin/            # Componentes del panel de administración
│   │   ├── auth/             # Componentes de autenticación
│   │   ├── ayuda/            # Componentes de la sección de ayuda
│   │   ├── normativas/       # Componentes de la sección de normativas
│   │   ├── nosotros/         # Componentes de la sección de nosotros
│   │   ├── patron/           # Componentes de la sección del patrón
│   │   ├── perfil/           # Componentes de la sección de perfil
│   │   └── servicios/        # Componentes de la sección de servicios
│   ├── lib/
│   │   ├── supabase/         # Clientes preconfigurados de Supabase
│   │   │   ├── client.ts     # Cliente para Client Components (Navegador)
│   │   │   ├── server.ts     # Cliente para Server Components & Server Actions
│   │   │   └── middleware.ts # Helper para refresco automático de tokens Auth
│   │   └── utils.ts          # Helper cn() para composición de clases Tailwind
│   └── middleware.ts         # Middleware global de autenticación y protección de rutas
├── .editorconfig             # Reglas de formato de editor
├── .env.example              # Plantilla de variables de entorno para Supabase
├── .env.local                # Variables locales (ignoradas en git)
├── .prettierrc               # Configuración Prettier (Single Quotes activado)
├── eslint.config.mjs         # Configuración del linter ESLint
├── next.config.ts            # Configuración de Next.js
├── package.json              # Dependencias y scripts del proyecto
└── tsconfig.json             # Configuración del compilador TypeScript
```

---

## 🚀 Inicio Rápido

### 1. Clona e instala las dependencias

```bash
# Instalar dependencias
npm install
```

### 2. Configura las variables de entorno

Copia la plantilla `.env.example` a `.env.local` y añade tus credenciales de Supabase:

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

### 3. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 🛠️ Scripts Disponibles

En el directorio del proyecto puedes ejecutar:

| Comando                | Descripción                                                           |
| :--------------------- | :-------------------------------------------------------------------- |
| `npm run dev`          | Inicia el servidor de desarrollo en modo local                        |
| `npm run build`        | Compila la aplicación optimizada para producción                      |
| `npm run start`        | Inicia el servidor de producción tras compilar                        |
| `npm run lint`         | Ejecuta el linter de ESLint                                           |
| `npm run format`       | Formatea todo el código garantizando el uso de comillas simples (`'`) |
| `npm run format:check` | Verifica que todos los archivos cumplan las reglas de estilo          |

---

## 🔑 Uso de Supabase

El proyecto incluye ayudantes preconfigurados para interactuar con Supabase según el contexto:

### Client Component (Browser)

```tsx
'use client';

import { createClient } from '@/lib/supabase/client';

export default function UserProfile() {
  const supabase = createClient();
  // ...
}
```

### Server Component / Server Action

```tsx
import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();
  // ...
}
```

---

<p align="center">
  Hecho con 💙 para la <b>DAI</b>
</p>
