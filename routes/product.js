import { Router } from 'express'
import { validateCreateProduct } from '../validators/productValidator.js'
import { createProductController } from '../controllers/productController.js'

const router = Router()

router.post('/', validateCreateProduct, createProductController)

export default router
