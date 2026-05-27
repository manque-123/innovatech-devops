const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Para que el Front pueda leerlo
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ mensaje: "✅ Conexión Exitosa: Backend Innovatech respondiendo" }));
});
server.listen(5000, '0.0.0.0', () => console.log('Backend en puerto 5000'));