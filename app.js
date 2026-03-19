import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Probando servidor')
})

app.get('/test/:saludo', (req, res) => {
  res.send(`Tu parametro dinamico es ${req.params.saludo}`)
})

export default app
