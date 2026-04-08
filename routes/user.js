import { Router } from 'express'
import {
  validateCreateUser,
  validateUpdateUser,
} from '../validators/userValidator.js'
import {
  createUserController,
  deleteUsersByIdController,
  deleteUsersController,
  getAllUsersByIdController,
  getAllUsersController,
  updateUserByIdController,
  updateUsersController,
} from '../controllers/userController.js'

const router = Router()

router.post('/', validateCreateUser, createUserController)

router.get('/', getAllUsersController)

router.get('/:id', getAllUsersByIdController)

router.patch('/:id', validateUpdateUser, updateUserByIdController)

router.put('/', validateUpdateUser, updateUsersController)

router.delete('/all', deleteUsersController)

router.delete('/:id', deleteUsersByIdController)

export default router
