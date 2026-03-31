import express from 'express'
import {
  validateCreateUser,
  validateCreateUserWhitEmail,
} from './validators/userValidator.js'
import { validationResult } from 'express-validator'
import { createUserController } from './controllers/userController.js'

const app = express()

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  next()
})

app.use(express.json())

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

app.post('/user', validateCreateUser, (req, res) => {
  const error = validationResult(req)

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array().map((e) => e.msg) })
  }

  res
    .status(200)
    .json({ message: `Usuario creado con exito!`, edad: req.body.edad })
})

app.post('/usuarios', validateCreateUserWhitEmail, createUserController)

export default app
