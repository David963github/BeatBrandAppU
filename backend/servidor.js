const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();

// Importar conexión mongo
const archivoBD = require('./conexion');

// Importar archivo rutas y modelo usuario
const rutausuario = require('./rutas/usuario');

// Importar body parser
const bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar el middleware 'cors'
app.use(cors({
    origin: 'http://localhost:3000'
}

));

// Configurar rutas
app.use('/api/usuario', rutausuario);

// Crear Rutas
app.get('/', (req, res) => {
    res.end('Ready servidor back is RUN');
});

app.get('/exelent', (req, res) => {
    res.end('Ready servidor back is RUN Exelent');
});
app.post('/api/usuario/agregarusuario', (req, res) => {
    res.end('Ready agregar usuario');
});

app.get('/responsive', (req, res) => {
    const filePath = path.join(__dirname, 'responsive.html');
    res.set('Content-Type', 'text/html');
    res.sendFile(filePath);
});

// Servidor básico
app.listen(2000, function() {
    console.log('El servidor está corriendo correctamente, dap');
});

