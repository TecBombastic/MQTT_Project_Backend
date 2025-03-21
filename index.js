import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(multer().array())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola desde el API')
})

app.listen(PORT, () => {
  console.log(`Servidor inciado en el puerto ${PORT}`)
})