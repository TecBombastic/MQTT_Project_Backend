import express from 'express'
import cors from 'cors' // Esto es para peticiones desde otros servidores
import { router as pedidos } from './routes/pedidos.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/', pedidos) // Es dice que la ruta de pedidos estarán accesibles desde la raíz /

app.listen(PORT, () => { // Inicia el servidor
  console.log(`Servidor inciado en el puerto ${PORT}`)
})