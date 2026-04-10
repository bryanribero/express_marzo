import { Router } from 'express'
import {
  validateCreateProduct,
  validateCreateProducts,
} from '../validators/productValidator.js'
import {
  createProductController,
  createProductsController,
} from '../controllers/productController.js'

const router = Router()

router.post('/', validateCreateProduct, createProductController)

router.post('/varios', validateCreateProducts, createProductsController)

export default router
