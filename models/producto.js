import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
  nombre_producto: { type: String, require: true },
  precio: { type: Number, require: true, min: 0 },
  cantidad: { type: Number, require: true, min: 0 },
})

const Producto = mongoose.model('Producto', productoSchema, 'productos')

export default Producto
