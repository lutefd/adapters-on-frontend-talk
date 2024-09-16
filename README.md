# Adapter Pattern in Frontend Frameworks

This project demonstrates the use of the Adapter Pattern in frontend frameworks to handle changing API structures. It includes a backend API with two versions and frontend implementations in React, Vue, and Svelte, both with and without the Adapter Pattern.

## Project Structure

- `backend/`: Go backend with two API versions
- `frontend/`: Astro-based frontend with React, Vue, and Svelte components

## Getting Started

### Prerequisites

- Go 1.23 or later
- Node.js 18 or later
- pnpm (for frontend package management)

If you don't have pnpm installed, you can install it using npm:

```bash
npm install -g pnpm
```

### Running the Backend

You have two options to run the backend:

1. Using Go directly:

```bash
cd backend
go run cmd/api/main.go
```

2. Using Docker:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:23940`.

### Running the Frontend

1. Install dependencies:

```bash
cd frontend
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

The frontend will be available at `http://localhost:4321`.

## Using the Makefile

The project includes a Makefile for convenience. Here are the available commands:

- `make run-api`: Start the backend API
- `make build-api`: Build the backend API binary
- `make install-frontend`: Install frontend dependencies
- `make run-frontend`: Start the frontend development server
- `make all`: Run the API and install frontend dependencies
- `make clean`: Remove built binaries

## Exploring the Adapter Pattern

This project showcases the Adapter Pattern in action. You'll find implementations with and without the adapter for each framework (React, Vue, Svelte).

1. Visit the homepage at `http://localhost:4321` to see links to each implementation.
2. Try switching between API v1 and v2 in the "Without Adapter" versions. You'll notice errors in the console.
3. Compare this to the "With Adapter" versions, which handle the API change seamlessly.

### Challenge

Try to fix the errors in the "Without Adapter" versions:
1. By implementing an adapter (similar to the "With Adapter" versions).
2. Without using an adapter (by modifying the component logic directly).

Consider the pros and cons of each approach in terms of maintainability and scalability.
