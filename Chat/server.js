// /backend/server.js
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import configureSocket from './utils/socket.js';
import authRoutes from './routes/authRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();
const server = http.createServer(app);

// Configure Socket.io
const io = configureSocket(server);

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/auth', authRoutes); // Use authentication routes
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);

// Define a route handler for the /api/auth endpoint
app.get('/api/auth', (req, res) => {
  res.status(405).json({ message: 'Method Not Allowed' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
