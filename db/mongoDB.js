import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const url = `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

mongoose.connect(url)

const mongodb = mongoose.connection

mongodb.on('error', console.error.bind(console, 'Error en la conexion'))
mongodb.once('open', () => {
  console.log('Conexion exitosa a la DB')
})

export default mongodb
