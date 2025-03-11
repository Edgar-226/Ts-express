import { Sequelize } from 'sequelize';

// Configuración de la conexión
const sequelize = new Sequelize({
    dialect: 'mssql', // Especifica el dialecto de SQL Server
    host: 'localhost\\SQLEXPRESS', // Nombre del servidor
    database: 'test_tareas', // Nombre de la base de datos
    username: 'admint', // Usuario de SQL Server
    password: 'password1', // Contraseña de SQL Server
    dialectOptions: {
        options: {
            encrypt: true, // Si usas Azure, cambia a true

        },
    },
});

// Probar la conexión
async function testConnection() {

    try {

        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

testConnection();

export default sequelize;