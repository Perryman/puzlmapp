# Puzlmapp

A simple full-stack application with a PostgreSQL database, Node.js backend, and Nginx frontend.

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/puzlmapp.git
    cd puzlmapp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

#### Start the application
To start the application in production mode:
```sh
npm run start
```

To start the application in development mode:
```sh
npm run dev:start
```

#### Stop the application
To stop the application in production mode:
```sh
npm run stop
```

To stop the application in development mode:
```sh
npm run dev:stop
```

### Database Initialization
To initialize the database:
```sh
npm run docker:init
```

### Logs
To view logs for all services:
```sh
npm run logs
```

To view logs for specific services:
```sh
npm run logs:backend
npm run logs:frontend
npm run logs:db
```

### Database Management
To start only the database:
```sh
npm run docker:up:db
```

To check the status of the database:
```sh
npm run dbstat
```

To get information about the database:
```sh
npm run dbinfo
```

To view the database schema:
```sh
npm run dbschema
```

To dump the database contents:
```sh
npm run dbdump
```

### Clean Up
To clean up Docker containers and volumes:
```sh
npm run docker:clean
```

### Fresh Start
To perform a fresh start of the application:
```sh
npm run fresh:start
```

## Notes

- The frontend is served by Nginx at `http://localhost:8080`.
- The backend connects to the PostgreSQL database via the Docker network.
- Ensure Docker is running before executing any commands.