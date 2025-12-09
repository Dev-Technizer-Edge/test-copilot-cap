# Task Management REST API

A robust Node.js + Express REST API for task management, built with a clean architecture and modular design.

## Features

- ✅ Node.js runtime with Express framework
- ✅ RESTful API endpoints for task management
- ✅ Clean folder structure (routes, controllers, services, models, config)
- ✅ Error handling middleware
- ✅ Nodemon for development auto-reload
- ✅ Environment configuration support

## Project Structure

```
src/
├── config/          # Application configuration
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Data structures
├── routes/          # API endpoint definitions
├── middleware/      # Express middleware
├── app.js          # Express app configuration
└── index.js        # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

### Running the Application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on port 3000 (or PORT specified in .env).

## API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Health Check
- **GET** `/api/health` - Check API status

### Tasks
- **GET** `/api/tasks` - Get all tasks
- **GET** `/api/tasks/:id` - Get task by ID
- **POST** `/api/tasks` - Create new task
- **PUT** `/api/tasks/:id` - Update task
- **DELETE** `/api/tasks/:id` - Delete task

## Example Usage

### Get all tasks
```bash
curl http://localhost:3000/api/tasks
```

### Create a task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","description":"Task description","completed":false}'
```

## Scripts

- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with nodemon

## Error Handling

The API includes a comprehensive error handling middleware that:
- Catches all errors in the application
- Returns consistent error responses
- Includes stack traces in development mode
- Logs errors for debugging

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| NODE_ENV | Environment (development/production) | development |

## Development

The project uses nodemon for automatic server restarts during development. Any changes to files in the `src/` directory will trigger a reload.

## License

ISC