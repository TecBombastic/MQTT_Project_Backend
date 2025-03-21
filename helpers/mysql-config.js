import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config() // Carga las variables de entorno

const pool = mysql.createPool({ //Crea un pool de conexiones a MySQL
    connectionLimit: 10, // Num maximo de conexiones
    host : process.env.DBHOST, // IP o URL de la base
    user : process.env.DBUSER, // Usuario de la base
    password: process.env.DBPASS, // Contraseña de la base
    database: process.env.DBNAME, // Nombre de la base
    port : process.env.DBPORT // Puerto de la base
});

pool.getConnection((err, connection) => { // Prueba la conexión
    if(err){ // Si hay alguní error, imprime en la consola 
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Base de datos conectada');
    connection.release(); // Libera la conexión para que otros la usen
})
export { pool } // Exporta el pool para usarlos en otros archivos