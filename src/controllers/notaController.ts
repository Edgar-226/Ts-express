import { Request, Response } from 'express';
import {
    getAllNotas,
    getNotaById,
    createNota,
    updateNota,
    deleteNota,
} from '../services/notaService';

// Obtener todas las notas
export async function getAllNotasController(req: Request, res: Response) {
    try {
        const notas = await getAllNotas();
        res.json(notas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notas' });
    }
}

// Obtener una nota por ID
export async function getNotaByIdController(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id, 10);
        const nota = await getNotaById(id);
        if (nota) {
            res.json(nota);
        } else {
            res.status(404).json({ message: 'Nota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la nota' });
    }
}

// Crear una nueva nota
export async function createNotaController(req: Request, res: Response) {
    try {
        const { nota } = req.body;
        const nuevaNota = await createNota(nota);
        res.status(201).json(nuevaNota);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la nota' });
    }
}

// Actualizar una nota
export async function updateNotaController(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id, 10);
        const { nota } = req.body;
        const notaActualizada = await updateNota(id, nota);
        if (notaActualizada) {
            res.json(notaActualizada);
        } else {
            res.status(404).json({ message: 'Nota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la nota' });
    }
}

// Eliminar una nota
export async function deleteNotaController(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id, 10);
        const success = await deleteNota(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Nota no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la nota' });
    }
}