import { Router } from 'express'
import {
  validateCreateProduct,
  validateCreateProducts,
  validateUpdateProducts,
} from '../validators/productValidator.js'
import {
  createProductController,
  createProductsController,
  getProductByIdController,
  getProductsController,
  updateProductsController,
} from '../controllers/productController.js'

const router = Router()

router.post('/', validateCreateProduct, createProductController)

router.post('/varios', validateCreateProducts, createProductsController)

router.get('/', getProductsController)

router.get('/:id', getProductByIdController)

router.patch('/', validateUpdateProducts, updateProductsController)

export default router
