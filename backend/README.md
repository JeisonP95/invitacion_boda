# Wedding Invitation Backend

This is the backend server for the Wedding Invitation system, developed using modern technologies and a client-server architecture. It provides robust API endpoints and real-time functionality for managing wedding invitations.

## Tech Stack

- **Core Technologies**:
  - Node.js with Express
  - TypeScript for type safety
  - MySQL for data persistence
  - Socket.IO for real-time features
  - Bun as runtime and package manager

## Project Structure

```
src/
├── configs/        # Configuration files and environment setup
├── controllers/    # Request handlers and business logic
├── routes/         # API route definitions
├── models/         # Database models and schemas
├── middleware/     # Custom middleware functions
├── services/       # Business logic and external service integration
├── utils/         # Helper functions and utilities
└── types/         # TypeScript type definitions
```

## Prerequisites

1. Install [Bun](https://bun.sh/) (version 1.0 or higher)
2. MySQL (version 8.0 or higher)
3. Node.js (version 18+ LTS) and npm

## Getting Started

### Environment Setup

1. Create a `.env` file in the root directory with the following configuration:

```env
# Database Configuration
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=invitations

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration (for authentication)
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173
```

### Installation

1. Install dependencies:
```bash
bun run i
```

2. Initialize the database:
```bash
bun run db:init
```

3. Start the development server:
```bash
bun run dev
```

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run start` - Run production build
- `bun run test` - Run test suite
- `bun run db:init` - Initialize database schema
- `bun run db:migrate` - Run database migrations
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript type checking

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new couple account

### Guests
- `GET /api/guests` - List all guests
- `POST /api/guests` - Add new guest
- `PUT /api/guests/:id` - Update guest details
- `DELETE /api/guests/:id` - Remove guest

### RSVP
- `POST /api/rsvp/:guestId` - Submit RSVP response
- `GET /api/rsvp/status` - Get RSVP statistics

### Menu
- `GET /api/menu` - Get menu options
- `POST /api/menu/preference/:guestId` - Set menu preference

## Real-time Features

The backend implements Socket.IO for real-time updates including:
- Instant RSVP notifications
- Live guest list updates
- Real-time menu selection tracking
- Admin dashboard statistics

## Development Guidelines

- Follow TypeScript strict mode guidelines
- Implement proper error handling and logging
- Use dependency injection where applicable
- Write unit tests for critical functionality
- Document all API endpoints and WebSocket events
- Follow RESTful API design principles

## Security Measures

- JWT-based authentication
- Input validation and sanitization
- Rate limiting on sensitive endpoints
- CORS configuration
- Environment variable management
- SQL injection prevention

## Error Handling

The application implements a centralized error handling system with:
- Custom error classes
- HTTP status code mapping
- Structured error responses
- Detailed logging in development

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
# Run all tests
bun run test

# Run specific test suite
bun run test:unit
bun run test:integration
```

## Deployment

1. Build the application:
```bash
bun run build
```

2. Set production environment variables
3. Run database migrations
4. Start the server:
```bash
bun run start
```

## Related

- [Main Project README](../README.md)
- [Frontend Documentation](../frontend/README.md)

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details.