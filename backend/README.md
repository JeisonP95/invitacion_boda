# Invitación de Boda - Aplicación Web

Esta es una aplicación web para gestionar invitaciones de boda, desarrollada utilizando tecnologías modernas y una arquitectura cliente-servidor.

## Estructura del Proyecto

```
invitacion_boda/
├── backend/         # Servidor backend
│   ├── src/
│   │   ├── configs/    # Configuraciones (DB, etc.)
│   │   └── ...
├── frontend/       # Cliente frontend
└── README.md
```

## Tecnologías Utilizadas

- **Backend**: 
  - Bun (Runtime y gestor de paquetes)
  - TypeScript
  - MySQL
  - Tiempo real implementado
- **Frontend**:
  - [Tecnologías del frontend]

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

## Características

- Sistema de gestión de invitaciones en tiempo real
- Base de datos MySQL para almacenamiento persistente
- [Otras características principales]

## Desarrollo

El proyecto está estructurado para permitir un desarrollo eficiente y mantenible. El backend utiliza TypeScript para un desarrollo más robusto y seguro, mientras que la implementación en tiempo real permite actualizaciones instantáneas.

## Notas Importantes

- Asegúrate de tener todas las variables de entorno configuradas antes de iniciar el proyecto
- La base de datos debe estar creada y accesible antes de iniciar el servidor
- El servidor en tiempo real está implementado en el backend para actualizaciones instantáneas

## Contribución

[Instrucciones para contribuir al proyecto]

## Licencia

[Información de la licencia]