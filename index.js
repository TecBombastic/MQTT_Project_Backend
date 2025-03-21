const express = require('express');
const db = require('./env'); 
const app = express();
const port = 3036;

app.use(express.json()); 

app.post('/api/pedido', async (req, res) => {
  const { nombre_cliente, mesa, productos } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO pedidos (nombre_cliente, mesa, total, fecha) VALUES (?, ?, ?, ?)',
      [
        nombre_cliente,
        mesa,
        productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0),
        new Date(),
      ]
    );

    const pedido_id = result.insertId;

    for (const prod of productos) {
      await db.execute(
        'INSERT INTO productos (pedido_id, producto, cantidad, precio, notas) VALUES (?, ?, ?, ?, ?)',
        [pedido_id, prod.producto, prod.cantidad, prod.precio, prod.notas]
      );
    }

    res.status(201).json({ message: 'Pedido creado', pedido_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el pedido' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
