import express from 'express'
import globalError from './middlewares/errorHandler.js'
import { notFound } from './middlewares/notFound.js'
import usersRouter from './routes/user.js'
import mongodb from './db/mongoDB.js'

mongodb()

const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)

app.use(notFound)

app.use(globalError)

export default app
