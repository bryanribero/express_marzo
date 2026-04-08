import { body } from 'express-validator'

export const validateCreateUser = [
  body('nombre').notEmpty().withMessage('El nombre no debe estar vacio'),
  body('edad')
    .customSanitizer((value) => parseInt(value, 10))
    .isInt({ min: 1 })
    .withMessage('La edad tiene que ser un numero entero mayor a 0'),
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
