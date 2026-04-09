import Producto from '../models/producto.js'

export async function createProducto(...documento) {
  try {
    const producto = await Producto.create([documento])
  } catch (err) {}
}
