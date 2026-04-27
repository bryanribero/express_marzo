import { Router } from 'express'
import { sanitizeMiddleware } from '../middlewares/sanitizeMiddleware.js'
import { createContentController } from '../controllers/sanitizeController.js'

const router = Router()

router.post('/', sanitizeMiddleware(['content']), createContentController)

export default router
