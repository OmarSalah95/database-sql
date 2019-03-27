// endpoints here
const server = require('./server.js')
const port = 3301;

server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});