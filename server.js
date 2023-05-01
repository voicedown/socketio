const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A client has connected');

  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
