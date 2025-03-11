import Nota from '../models/Nota';

// Obtener todas las notas
export async function getAllNotas() {
    try {
        const notas = await Nota.findAll();
        return notas;
    } catch (error) {
        console.error('Error al obtener las notas:', error);
        throw error;
    }
}

// Obtener una nota por ID
export async function getNotaById(id: number) {
    try {
        const nota = await Nota.findByPk(id);
        return nota;
    } catch (error) {
        console.error('Error al obtener la nota:', error);
        throw error;
    }
}

// Crear una nueva nota
export async function createNota(nota: string) {
    try {
        const nuevaNota = await Nota.create({
            nota,
            fechaHoraCreacion:null,
            ultimaModificacion:null
          
        });
        console.log(nuevaNota);
        
        return nuevaNota;
    } catch (error) {
        console.error('Error al crear la nota:', error);
        throw error;
    }
}

// Actualizar una nota
export async function updateNota(id: number, nuevaNota: string) {
    try {
        const nota = await Nota.findByPk(id);
        if (nota) {
            nota.nota = nuevaNota;
            nota.ultimaModificacion = new Date();
            await nota.save();
            return nota;
        }
        return null;
    } catch (error) {
        console.error('Error al actualizar la nota:', error);
        throw error;
    }
}

// Eliminar una nota
export async function deleteNota(id: number) {
    try {
        const nota = await Nota.findByPk(id);
        if (nota) {
            await nota.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error al eliminar la nota:', error);
        throw error;
    }
}