import { defineConfig } from 'vite';

export default defineConfig({
    root: './client', // The directory where your frontend files are located
    server: {
        port: 8080, // Serve on localhost:8080
        strictPort: true, // Fail if 8080 is already in use
    },
});
