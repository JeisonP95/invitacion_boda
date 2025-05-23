# Invitación de Boda - Aplicación Web

Esta es una aplicación web para gestionar invitaciones de boda, desarrollada utilizando tecnologías modernas y una arquitectura cliente-servidor. El sistema permite a los novios gestionar su lista de invitados, mientras que los invitados pueden confirmar su asistencia y seleccionar opciones de menú en tiempo real.

## Estructura del Proyecto

```
invitacion_boda/
├── backend/         # Servidor backend
│   ├── src/
│   │   ├── configs/    # Configuraciones (DB, etc.)
│   │   ├── controllers/# Controladores de la aplicación
│   │   ├── routes/     # Rutas de la API
│   │   ├── models/     # Modelos de datos
│   │   └── utils/      # Utilidades y helpers
├── frontend/       # Cliente frontend
│   ├── src/
│   │   ├── components/ # Componentes reutilizables
│   │   ├── pages/      # Páginas de la aplicación
│   │   ├── hooks/      # Custom hooks
│   │   ├── context/    # Contextos de React
│   │   ├── services/   # Servicios y llamadas API
│   │   ├── styles/     # Estilos y temas
│   │   └── utils/      # Utilidades y helpers
└── README.md
```

## Tecnologías Utilizadas

- **Backend**: 
  - Bun (Runtime y gestor de paquetes)
  - TypeScript
  - MySQL
  - Tiempo real implementado
- **Frontend**:
  - React con TypeScript
  - Tailwind CSS para estilos
  - React Router para navegación
  - Socket.io-client para tiempo real
  - Vite como bundler

## Requisitos Previos

1. Instalar [Bun](https://bun.sh/)
2. MySQL instalado y configurado
3. Node.js y npm (para algunas dependencias)

## Configuración del Entorno

### Variables de Entorno

Crear un archivo `.env` en la carpeta `backend` con la siguiente configuración:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=invitations
```

## Instalación y Ejecución

### Backend

1. Instalar dependencias:
```bash
cd backend
bun run i
```

2. Ejecutar en modo desarrollo (con recarga en tiempo real):
```bash
bun run dev
```

3. Compilar y ejecutar en producción:
```bash
bun run build    # Compilar el proyecto
bun run start    # Ejecutar la versión compilada
```

### Frontend

1. Instalar dependencias:
```bash
cd frontend
bun run i
```

2. Ejecutar en modo desarrollo:
```bash
bun run dev
```

3. Compilar para producción:
```bash
bun run build    # Genera la versión optimizada para producción
```

## Características

- Sistema de gestión de invitaciones en tiempo real
- Base de datos MySQL para almacenamiento persistente
- Interfaz de usuario moderna y responsive
- Panel de administración para los novios
- Sistema de confirmación de asistencia
- Selección de menú y preferencias alimentarias
- Notificaciones en tiempo real
- Diseño adaptable para móviles y escritorio

## Desarrollo

El proyecto está estructurado para permitir un desarrollo eficiente y mantenible. El backend utiliza TypeScript para un desarrollo más robusto y seguro, mientras que la implementación en tiempo real permite actualizaciones instantáneas. El frontend está construido con React y TypeScript, utilizando las mejores prácticas de desarrollo y patrones de diseño modernos.

## Notas Importantes

- Asegúrate de tener todas las variables de entorno configuradas antes de iniciar el proyecto
- La base de datos debe estar creada y accesible antes de iniciar el servidor
- El servidor en tiempo real está implementado en el backend para actualizaciones instantáneas
- El frontend debe tener acceso al backend para funcionar correctamente

## Contribución

Para contribuir al proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.