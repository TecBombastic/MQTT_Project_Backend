import express from 'express'
import dotenv from 'dotenv'
import { router as pedidos } from './routes/pedidos.js'

const app = express()
const PORT = 3000

dotenv.config() // Carga las variables de entorno
app.use(express.json()) // Middleware para parsear JSON

app.use('/', pedidos) // Es dice que la ruta de pedidos estarán accesibles desde la raíz 

app.get('/', (req, res) => {
    res.send('Tienda API')
})

app.listen(PORT, () => { // Inicia el servidor
    console.log(`Servidor inciado en el puerto ${PORT}`)
})
