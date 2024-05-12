# Real-Time Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring user authentication, real-time messaging, and integration with a language model API for generating responses.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Routes](#api-routes)
4. [Environment Variables](#environment-variables)
5. [Technologies Used](#technologies-used)
6. [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ashwinikumar2003/Realtime-Chat-Application.git

2. **Navigate to the project directory:**

cd Realtime-Chat-Application

3. **Install dependencies for both the server and the client:**

cd Chat && npm install

## Usage
**Start the server:**

npm run dev
Open your web browser and navigate to http://localhost:5000 to access the chat application.

## API Routes

- **Authentication**
POST /api/auth/register: Register a new user.

Request Body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }
POST /api/auth/login: Log in an existing user.

Request Body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "JWT_TOKEN" }

- **Chat**
POST /api/chat/send-message: Send a chat message.

Request Body: { "sender": "SENDER_ID", "receiver": "RECEIVER_ID", "content": "Hello!" }
Response: { "message": "Message sent successfully." }
GET /api/chat/messages: Get chat messages between users.

Query Parameters: user1Id, user2Id
Response: { "messages": [...] }

## Environment Variables
Create a .env file in the server directory with the following variables:

PORT=5000
MONGODB_URI=mongodb://your_mongodb_url
JWT_SECRET=your_jwt_secret

## Technologies Used
- MongoDB: NoSQL database for storing chat messages and user data.
- Express.js: Node.js web application framework for building the server.
- Node.js: JavaScript runtime environment for running the server.
- Socket.io: Real-time engine for bi-directional communication between clients and server.
- JSON Web Tokens (JWT): Secure method for authenticating user.
