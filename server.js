const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A client has connected');

  // Listen for 'dynamic-event' events
  socket.on('dynamic-event', (data) => {
    console.log(`Received dynamic-event with data: ${data}`);

    // Get the dynamic event name from the data object
    const eventName = data.eventName;
    
    // Remove the eventName property from the data object
    delete data.eventName;

    // Emit the event with the dynamic name and data
    socket.emit(eventName, data);
  });

  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
