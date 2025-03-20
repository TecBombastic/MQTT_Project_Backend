import express from 'express'
const router = express.Router();
import { obtenerPedidos } from '../controllers/pedidos.controller.js' // Importar el controlador de pedidos 


router.get('/pedidos', obtenerPedidos); // Define la ruta GET para obtener los pedidos

export { router } // Exporta el router para usarlo en index.js