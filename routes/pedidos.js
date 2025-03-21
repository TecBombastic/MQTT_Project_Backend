import express from 'express'
const router = express.Router();
import { crearPedido } from '../controllers/pedidos.controller.js' // Importar el controlador de pedidos 

router.post('/pedidos', crearPedido); // Define la ruta GET para obtener los pedidos

export { router } // Exporta el router para usarlo en index.js