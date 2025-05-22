# Wedding Invitation Frontend

This is the frontend application for the Wedding Invitation system, built with React, TypeScript, and Vite. The application provides a modern and responsive interface for wedding guests to manage their invitations and for couples to administrate their guest list.

## Tech Stack

- React 18+ with TypeScript
- Vite for build tooling and development
- Tailwind CSS for styling
- React Router for navigation
- Socket.io-client for real-time updates

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Backend server running (see main project README)

### Installation

1. Install dependencies:
```bash
bun run i
```

2. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000
```

3. Start the development server:
```bash
bun run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route pages
├── hooks/         # Custom React hooks
├── context/       # React context providers
├── services/      # API and socket services
├── styles/        # Global styles and Tailwind config
├── types/         # TypeScript type definitions
└── utils/         # Helper functions and constants
```

## ESLint Configuration

The project uses a strict TypeScript-aware ESLint configuration. To modify the rules, edit the `eslint.config.js` file:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Features

- Real-time updates for guest responses
- Responsive design for all devices
- Theme customization
- Interactive RSVP forms
- Menu selection interface
- Admin dashboard for couples
- Guest list management
- Dietary preferences handling

## Development Guidelines

- Use TypeScript strict mode
- Follow the component structure in `src/components`
- Implement responsive design using Tailwind CSS
- Handle all API calls through service functions
- Use React context for global state management
- Implement error boundaries for robust error handling

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and type checking
4. Submit a pull request

## Related

- [Main Project README](../README.md)
- [Backend Documentation](../backend/README.md)
