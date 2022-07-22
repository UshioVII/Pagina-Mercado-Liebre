const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

/* Recursos Estaticos */
app.use(express.static('public'));

/* Rutas */
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get("./register", (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));


app.listen(port, () => console.log(`Server running on http://localhost:${port}/`))