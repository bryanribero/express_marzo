import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Probando servidor')
})

app.get('/test/:saludo', (req, res) => {
  res.send(`Tu parametro dinamico es ${req.params.saludo}`)
})

app.get('/test1/query', (req, res) => {
  const { nombre, edad } = req.query

  res.send(`nombre: ${nombre}, edad: ${edad}`)
})

export default app
