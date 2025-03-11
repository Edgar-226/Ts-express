import express from 'express';
import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter); // Usa las rutas definidas en api.ts

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});