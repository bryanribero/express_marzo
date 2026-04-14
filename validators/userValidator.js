import { body } from 'express-validator'

export const validateUser = [
  body('email').isEmail().withMessage('Formato de email incorrecto'),

  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('La contraseña debe contener entre 8 y 16 caracteres'),

  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('El rol debe ser "user" o "admin"'),
]

export const validateCreateUserWhitEmail = [
  body('nombre').notEmpty().withMessage('El nombre no debe estar vacio'),
  body('email').isEmail().withMessage('El email ingresado es incorrecto'),
]

export const validateUpdateUser = [
  body('id_usuario')
    .not()
    .exists()
    .withMessage('No se permite modificar el ID'),
  body('nombre')
    .optional()
    .notEmpty()
    .withMessage('El nombre no debe estar vacio'),
  body('edad')
    .optional()
    .customSanitizer((value) => parseInt(value, 10))
    .isInt({ min: 1 })
    .withMessage('La edad tiene que ser un numero mayor que 0'),
]
