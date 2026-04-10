import { validationResult } from 'express-validator'
import { createProducto, createProductos } from '../services/productoService.js'

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
