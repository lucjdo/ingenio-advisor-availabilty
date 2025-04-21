# Ingenio Advisor Availability

A Next.js application for managing advisor availability in the Ingenio platform. This project is built with Next.js, React, TypeScript, and Material UI.

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc` or latest LTS)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ingenio-advisor-availability

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Application

```bash
# Start the development server with Turbopack
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## Project Structure

This project follows a feature-driven architecture, which organizes code by business domains rather than technical layers. This approach improves maintainability, scalability, and developer experience by keeping related code together.

```
./
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── features/        # Feature modules
│   │   └── advisors/    # Advisor feature
│   │       ├── components/  # UI components specific to advisors
│   │       ├── hooks/       # Custom React hooks for advisor functionality
│   │       ├── services/    # API services and data fetching
│   │       └── types/       # TypeScript type definitions
│   ├── lib/             # Shared utilities and configurations
│   ├── shared/          # Shared components and utilities
│   │   └── components/  # Reusable UI components
│   └── styles/          # Global styles
└── __tests__/          # Test files
```

### Feature-Driven Architecture

Each feature module in the `features/` directory contains everything needed for that specific business domain:

- **Components**: UI components specific to the feature
- **Hooks**: Custom React hooks for feature-specific logic
- **Services**: API services and data fetching logic
- **Types**: TypeScript type definitions

This organization makes it easier to:

- Understand the codebase by business domain
- Maintain and extend features independently
- Reuse code within feature boundaries
- Onboard new developers to specific features

## Testing

This project uses Vitest for unit testing. To run tests, use the following commands:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Test files are located in the `__tests__` directory.
