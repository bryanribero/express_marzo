import { Router } from 'express'
import {
  validateCreateUser,
  validateUpdateUser,
} from '../validators/userValidator.js'
import {
  createUserController,
  getAllUsersByIdController,
  getAllUsersController,
  updateUserByIdController,
} from '../controllers/userController.js'

const router = Router()

router.post('/', validateCreateUser, createUserController)

router.get('/', getAllUsersController)

router.get('/:id', getAllUsersByIdController)

router.patch('/:id', validateUpdateUser, updateUserByIdController)

export default router
