# Wedding Invitation - Web Application

This is a web application for managing wedding invitations, developed using modern technologies and a client-server architecture. The system allows couples to manage their guest list, while guests can confirm their attendance and select menu options in real-time.

## Project Structure

```
invitacion_boda/
├── backend/         # Backend server
│   ├── src/
│   │   ├── configs/    # Configurations (DB, etc.)
│   │   ├── controllers/# Application controllers
│   │   ├── routes/     # API routes
│   │   ├── models/     # Data models
│   │   └── utils/      # Utilities and helpers
├── frontend/       # Frontend client
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Application pages
│   │   ├── hooks/      # Custom hooks
│   │   ├── context/    # React contexts
│   │   ├── services/   # Services and API calls
│   │   ├── styles/     # Styles and themes
│   │   └── utils/      # Utilities and helpers
└── README.md
```

## Technologies Used

- **Backend**: 
  - Bun (Runtime and package manager)
  - TypeScript
  - MySQL
  - Real-time implementation
  - NodeJS using Express
- **Frontend**:
  - React with TypeScript
  - Tailwind CSS for styling
  - React Router for navigation
  - Socket.io-client for real-time
  - Vite as bundler

## Prerequisites

1. Install [Bun](https://bun.sh/)
2. MySQL installed and configured
3. Node.js and npm (for some dependencies)

## Environment Setup

### Environment Variables

Create a `.env` file in the `backend` folder with the following configuration:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=invitations
```

## Installation and Execution

### Backend

1. Install dependencies:
```bash
cd backend
bun run i
```

2. Run in development mode (with hot reload):
```bash
bun run dev
```

3. Build and run in production:
```bash
bun run build    # Build the project
bun run start    # Run the compiled version
```

### Frontend

1. Install dependencies:
```bash
cd frontend
bun run i
```

2. Run in development mode:
```bash
bun run dev
```

3. Build for production:
```bash
bun run build    # Generates the optimized production version
```

## Features

- Real-time invitation management system
- MySQL database for persistent storage
- Modern and responsive user interface
- Admin panel for the couple
- Attendance confirmation system
- Menu selection and dietary preferences
- Real-time notifications
- Responsive design for mobile and desktop

## Development

The project is structured to allow efficient and maintainable development. The backend uses TypeScript for more robust and secure development, while the real-time implementation allows instant updates. The frontend is built with React and TypeScript, using modern development best practices and design patterns.

## Important Notes

- Make sure all environment variables are configured before starting the project
- The database must be created and accessible before starting the server
- The real-time server is implemented in the backend for instant updates
- The frontend must have access to the backend to work properly

## Contributing

To contribute to the project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.