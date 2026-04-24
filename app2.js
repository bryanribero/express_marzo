import express from 'express'
import globalError from './middlewares/errorHandler.js'
import { notFound } from './middlewares/notFound.js'
import usersRouter from './routes/user.js'
import productsRouter from './routes/product.js'
import { connectDB } from './db/mongoDB.js'
import cors from 'cors'

//connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/users', usersRouter)

app.use('/api/products', productsRouter)

app.use(notFound)

app.use(globalError)

export default app
