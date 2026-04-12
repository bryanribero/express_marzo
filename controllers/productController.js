import { validationResult } from 'express-validator'
import {
  createProducto,
  createProductos,
  deleteProductById,
  deleteProductsWithFilters,
  getProducts,
  getProductsById,
  updateProductById,
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

export async function updateProductByIdController(req, res, next) {
  const body = req.body
  const { id } = req.params

  const validationError = validationResult(req)

  if (!validationError.isEmpty()) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: validationError.array().map((e) => e.msg),
    })
  }

  try {
    const product = await updateProductById(id, body)

    if (!product) {
      const error = new Error(`No se encontro el producto con el id: ${id}`)
      error.status = 404
      error.type = 'NotModified'
      throw error
    }

    res.status(201).json({ message: 'Producto modificado', result: product })
  } catch (err) {
    next(err)
  }
}

export async function deleteProductByIdController(req, res, next) {
  const { id } = req.params
  try {
    const product = await deleteProductById(id)

    if (!product) {
      const error = new Error(`No se encontro el producto con id: ${id}`)
      error.status = 404
      error.type = 'NotDelete'
      throw error
    }

    res.status(200).json({ message: 'Producto eliminado', result: product })
  } catch (err) {
    next(err)
  }
}

export async function deleteProductsWithFiltersController(req, res, next) {
  const filter = req.query

  const validationError = validationResult(req)

  if (!validationError.isEmpty()) {
    return res.status(400).json({
      message: 'Error de validación',
      errors: validationError.array().map((e) => e.msg),
    })
  }
  try {
    const product = await deleteProductsWithFilters(filter)

    if (product.deletedCount === 0) {
      const error = new Error(
        'No se encontro producto que coincida con el filtro'
      )
      error.status = 404
      error.type = 'NotDelete'
      return next(error)
    }

    res.status(200).json({ message: 'Producto eliminado', result: product })
  } catch (err) {
    next(err)
  }
}
