import Producto from '../models/producto.js'

export async function createProducto(documento) {
  try {
    const producto = await Producto.create(documento)

    return producto
  } catch (err) {
    console.error(err)
    const error = new Error('Error al crear el documento')
    error.details = err.message
    throw error
  }
}

export async function createProductos(documentosArray) {
  try {
    const producto = await Producto.insertMany(documentosArray)

    return producto
  } catch (err) {
    console.error(err)
    const error = new Error('Error al crear varios documentos')
    error.details = err.message
    throw error
  }
}
