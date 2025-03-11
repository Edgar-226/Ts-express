import express from 'express';
import {
    getAllNotasController,
    getNotaByIdController,
    createNotaController,
    updateNotaController,
    deleteNotaController,
} from '../controllers/notaController';

const router = express.Router();

// Rutas para las notas
router.get('/notas', getAllNotasController);
router.get('/notas/:id', getNotaByIdController);
router.post('/notas', createNotaController);
router.put('/notas/:id', updateNotaController);
router.delete('/notas/:id', deleteNotaController);

export default router;