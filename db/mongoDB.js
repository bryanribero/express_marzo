import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'dev'}`,
})

const url = `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

export async function connectDB() {
  try {
    await mongoose.connect(url, {
      dbName: 'prueba',
    })
    console.log('Conexion exitosa a la DB')
  } catch (err) {
    console.error('Error en la conexion a la DB', err)
  }
}
