Real-Time Chat Application
This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring user authentication, real-time messaging, and integration with a language model API for generating responses.

Table of Contents
Installation
Usage
API Routes
Environment Variables
Technologies Used
License
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/real-time-chat-app.git
Navigate to the project directory:

bash
Copy code
cd real-time-chat-app
Install dependencies for both the server and the client:

bash
Copy code
cd server && npm install
cd ../client && npm install
Usage
Start the server:

bash
Copy code
cd ../server && npm start
Start the client:

bash
Copy code
cd ../client && npm start
Open your web browser and navigate to http://localhost:3000 to access the chat application.

API Routes
Authentication
POST /api/auth/register: Register a new user.

Request Body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }
POST /api/auth/login: Log in an existing user.

Request Body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }
Chat
POST /api/chat/send-message: Send a chat message.

Request Body: { "sender": "SENDER_ID", "receiver": "RECEIVER_ID", "content": "Hello!" }
Response: { "message": "Message sent successfully." }
GET /api/chat/messages: Get chat messages between users.

Query Parameters: user1Id, user2Id
Response: { "messages": [...] }
Environment Variables
Create a .env file in the server directory with the following variables:

makefile
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_jwt_secret
Technologies Used
MongoDB: NoSQL database for storing chat messages and user data.
Express.js: Node.js web application framework for building the server.
React.js: JavaScript library for building the client-side interface.
Node.js: JavaScript runtime environment for running the server.
Socket.io: Real-time engine for bi-directional communication between clients and server.
JSON Web Tokens (JWT): Secure method for authenticating users.
Axios: Promise-based HTTP client for making requests to external APIs.
