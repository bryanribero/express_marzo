import { Router } from 'express'
import {
  validateCreateProduct,
  validateCreateProducts,
} from '../validators/productValidator.js'
import {
  createProductController,
  createProductsController,
  getProductsController,
} from '../controllers/productController.js'

const router = Router()

router.post('/', validateCreateProduct, createProductController)

router.post('/varios', validateCreateProducts, createProductsController)

router.get('/', getProductsController)

export default router
