import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database'; // Asegúrate de que la conexión esté configurada

class Nota extends Model {
    public id!: number;
    public nota!: string;
    public fechaHoraCreacion!: Date|null;
    public ultimaModificacion!: Date|null;
}

Nota.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nota: {
            type: DataTypes.TEXT, // NVARCHAR(MAX) se mapea a TEXT en Sequelize
            allowNull: false,
        },
        fechaHoraCreacion: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'FechaHora_creacion', // Mapea el nombre de la columna en la base de datos
        },
        ultimaModificacion: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Ultima_modificacion', // Mapea el nombre de la columna en la base de datos
        },
    },
    {
        sequelize, // Conexión a la base de datos
        modelName: 'Nota', // Nombre del modelo
        tableName: 'Notas', // Nombre de la tabla en la base de datos
        timestamps: false, // Desactiva los timestamps automáticos de Sequelize
    }
);

export default Nota;