import { pool } from '../helpers/mysql-config.js' // Importa la conexión a MySQL

const crearPedido = (req, res) => { // Función que maneja el POST
    const { nombre, mesa, productos } = req.body;

    if (!nombre || !mesa || !productos || productos.length === 0) { // Si no se envían los datos necesarios
        res.status(400).json({ error: 'Datos incompletos' })
    }

    const sqlPedido = 'INSERT INTO Pedidos (nombre, mesa) VALUES (?, ?)'; // Query para insertar un pedido
    pool.query(sqlPedido, [nombre, mesa], (err, result) => {
        if (err){
            res.status(500).json({ error: 'Error al registrar el pedido', details: err })
        }

        const pedidoID = result.insertId; // ID del pedido insertado

        const sqlDetalle = 'INSERT INTO DetallesPedido (pedido_id, producto, cantidad, precio, nota) VALUES (?, ?, ?, ?, ?)'; // Query para insertar los detalles
        productos.forEach(producto => {
            const { producto: nombreProducto, cantidad, precio, nota } = producto;
            pool.query(sqlDetalle, [pedidoID, nombreProducto, cantidad, precio, nota], (err) => {
                if (err){
                    res.status(500).json({ error: 'Error al registrar los detalles', details: err })
                }
            })
        })
        res.status(200).json({ mensaje: 'Pedido y detalles registrados correctamente', id: pedidoID })
    })
} 

export { crearPedido } // Exporta la función para usarla en otros archivos