import { Router } from 'express'
import { sumController } from '../controllers/testController.js'

const router = Router()

router.get('/sum', sumController)

export default router
