const { WebSocketServer } = require('ws');

// Render dynamically provides a PORT environment variable
const PORT = process.env.PORT || 8080;

// Start the WebSocket server
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws) => {
  console.log('🎉 New client connected via Render!');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo from Render: ${message}`);
  });

  ws.on('close', () => console.log('Client disconnected.'));
});

console.log(`WebSocket server running on port ${PORT}`);