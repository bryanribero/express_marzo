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

export const validateCreateProducts = [
  body()
    .isArray()
    .withMessage('El cuerpo de la peticion tiene que ser un array'),

  body('*.nombre').notEmpty().withMessage('Nombre no debe estar vacio'),

  body('*.precio')
    .notEmpty()
    .withMessage('Campo precio es obligatorio')
    .isFloat({ min: 0 })
    .withMessage('Precio invalido'),

  body('*.cantidad')
    .notEmpty()
    .withMessage('Campo cantidad es obligatorio')
    .isInt({ min: 0 })
    .withMessage('Cantidad invalida'),
]
