import { Server as SocketIOserver } from 'socket.io';

const configureSocket = (server) => {
  const io = new SocketIOserver(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    // Add socket event handlers here
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });

  return io;
};

export default configureSocket;
