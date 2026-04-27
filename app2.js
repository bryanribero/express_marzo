import express from 'express'
import globalError from './middlewares/errorHandler.js'
import { notFound } from './middlewares/notFound.js'
import usersRouter from './routes/user.js'
import productsRouter from './routes/product.js'
import sanitizeRouter from './routes/sanitize.js'
import { connectDB } from './db/mongoDB.js'
import cors from 'cors'

//connectDB()

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-type'],
  })
)

app.use(express.json())

app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)

app.use('/api/sanitize', sanitizeRouter)

app.use(notFound)

app.use(globalError)

export default app
