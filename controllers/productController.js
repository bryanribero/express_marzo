import { validationResult } from 'express-validator'
import {
  createProducto,
  createProductos,
  getProducts,
  getProductsById,
  updateProducts,
} from '../services/productoService.js'

export async function createProductController(req, res, next) {
  const document = req.body

  const validationError = validationResult(req)

  if (!validationError.isEmpty()) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: validationError.array(),
    })
  }

  try {
    const product = await createProducto(document)

    res.status(201).json({
      message: 'Producto creado',
      result: product,
    })
  } catch (err) {
    next(err)
  }
}

export async function createProductsController(req, res, next) {
  const body = req.body

  const validationError = validationResult(req)

  if (!validationError.isEmpty()) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: validationError.array(),
    })
  }

  try {
    const product = await createProductos(body)

    res.status(201).json({ message: 'Productos creados', result: product })
  } catch (err) {
    next(err)
  }
}

export async function getProductsController(req, res, next) {
  try {
    const product = await getProducts()

    res.status(200).json({ message: 'Productos conseguidos', result: product })
  } catch (err) {
    next(err)
  }
}

export async function getProductByIdController(req, res, next) {
  const { id } = req.params

  try {
    const product = await getProductsById(id)

    if (!product) {
      const error = new Error('Producto no encontrado')
      error.status = 404
      return next(error)
    }

    res.status(201).json({ result: product })
  } catch (err) {
    next(err)
  }
}

export async function updateProductsController(req, res, next) {
  const body = req.body

  const validationError = validationResult(req)

  if (!validationError.isEmpty()) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: validationError.array(),
    })
  }

  try {
    const product = await updateProducts(body)

    if (!product.modifiedCount) {
      const error = new Error('No se encontraron productos a modificar')
      error.status = 404
      error.type = 'NotModified'
      throw error
    }

    res.status(201).json({
      message: `Documentos actualizados: ${product.modifiedCount}`,
      result: product,
    })
  } catch (err) {
    next(err)
  }
}
