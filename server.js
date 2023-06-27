const http = require("http")
const hostname = 'localhost'
const port = 49152
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('hello saving such a planets the world')

});
server.listen(port,hostname,()=>{
    console.log(`server is running on localhost:${port} `)
}); 


































// const net = require('net');

// function checkPortAvailability(port) {
//   return new Promise((resolve) => {
//     const server = net.createServer();
//     server.listen(port, 'localhost', () => {
//       server.once('close', () => {
//         resolve(port);
//       });
//       server.close();
//     });
//     server.on('error', () => {
//       resolve(null);
//     });
//   });
// }

// async function findAvailablePort(startPort, endPort) {
//   for (let port = startPort; port <= endPort; port++) {
//     const availablePort = await checkPortAvailability(port);
//     if (availablePort !== null) {
//       return availablePort;
//     }
//   }
//   return null;
// }

// const startPort = 49152;
// const endPort = 65535;

// findAvailablePort(startPort, endPort)
//   .then((port) => {
//     if (port) {
//       console.log(`Available port: ${port}`);
//     } else {
//       console.log('No available port found.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error finding available port:', error);
//   });
