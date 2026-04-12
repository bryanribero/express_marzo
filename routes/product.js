import { Router } from 'express'
import {
  validateCreateProduct,
  validateCreateProducts,
  validateQueryNotEmpty,
  validateUpdateProducts,
} from '../validators/productValidator.js'
import {
  createProductController,
  createProductsController,
  deleteProductByIdController,
  deleteProductsWithFiltersController,
  getProductByIdController,
  getProductsController,
  updateProductByIdController,
  updateProductsController,
} from '../controllers/productController.js'

const router = Router()

router.post('/', validateCreateProduct, createProductController)

router.post('/varios', validateCreateProducts, createProductsController)

router.get('/', getProductsController)

router.get('/:id', getProductByIdController)

router.patch('/', validateUpdateProducts, updateProductsController)

router.patch('/:id', validateUpdateProducts, updateProductByIdController)

router.delete(
  '/delete-filters',
  validateQueryNotEmpty,
  deleteProductsWithFiltersController
)

router.delete('/:id', deleteProductByIdController)

export default router
