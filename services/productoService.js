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

export async function getProducts() {
  try {
    const product = await Producto.find()

    return product
  } catch (err) {
    console.error(err)
    const error = new Error('Error al obtener los documentos')
    error.details = err.message
    throw error
  }
}

export async function getProductsById(id) {
  try {
    const product = await Producto.findById(id)

    return product
  } catch (err) {
    console.error(err)
    const error = new Error('Error al obtener el Producto')
    error.details = err.message
    throw error
  }
}

export async function updateProducts(set) {
  try {
    const product = await Producto.updateMany({}, { $set: set })

    return product
  } catch (err) {
    const dbError = new Error('Error con la base de datos')
    dbError.type = 'DatabaseError'
    dbError.cause = err
    throw dbError
  }
}

export async function updateProductById(id, set) {
  try {
    const product = await Producto.findByIdAndUpdate(
      id,
      { $set: set },
      { returnDocument: 'after' }
    )

    return product
  } catch (err) {
    const dbError = new Error('Error con la base de datos')
    dbError.type = 'DatabaseError'
    dbError.cause = err
    throw dbError
  }
}
