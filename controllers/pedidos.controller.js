import { pool } from '../helpers/mysql-config.js' // Importa la conexión a MySQL


const obtenerPedidos = (req, res) => { // Función que maneja el GET
    const sql = "SELECT * FROM Pedidos"; // Consulta SQL para obtener los pedidos
    pool.query(sql, (err, results) => { // Realiza la consulta
        if (err) { // Si hay un error, lo devuelve en la respuesta
            console.error("Error en la consulta:", err)
            return res.status(500).json({ error: "Error al obtener los pedidos" })
            res.json(err)
        }
        res.json(results) // Si no hay error, devuelve los resultados en formato JSON
    })
}

export { obtenerPedidos } // Exporta la función para usarla en otros archivos
