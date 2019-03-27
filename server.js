// Imports
const server = require('express')();
const helmet = require('helmet');

// Set server to use JSON notation.
server.use(require("express").json());

// Security configuration
server.use(helmet());

// Set Routes for router
server.use('/api/cohorts', require('./Routers/cohortsRouter'))
// server.use('/api/students', require('./Routers/studentsRouter'))

// Root Server directory.
server.get('/', (req, res) => {
    // Sanity Check
    res.send(`Server Home directory GET is active.`);
});

 module.exports = server;