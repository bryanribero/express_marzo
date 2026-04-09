import { body } from 'express-validator'

export const validateCreateProduct = [
  body('nombre').notEmpty().withMessage('Nombre no debe estar vacio'),

  body('precio')
    .notEmpty()
    .withMessage('Campo precio es obligatorio')
    .isFloat({ min: 0 })
    .withMessage('Precio invalido'),

  body('cantidad')
    .notEmpty()
    .withMessage('Campo cantidad es obligatorio')
    .isInt({ min: 0 })
    .withMessage('Cantidad invalida'),
]
