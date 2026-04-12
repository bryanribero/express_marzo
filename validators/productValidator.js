import { body, query } from 'express-validator'

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

export const validateUpdateProducts = [
  body('nombre')
    .optional()
    .notEmpty()
    .withMessage('Nombre no debe estar vacio'),

  body('precio')
    .optional()
    .notEmpty()
    .withMessage('Campo precio es obligatorio')
    .isFloat({ min: 0 })
    .withMessage('Precio invalido'),

  body('cantidad')
    .optional()
    .notEmpty()
    .withMessage('Campo cantidad es obligatorio')
    .isInt({ min: 0 })
    .withMessage('Cantidad invalida'),

  body().custom((value) => {
    const allowedFields = ['nombre', 'precio', 'cantidad']
    const fields = Object.keys(value)
    const extraFields = fields.filter((field) => !allowedFields.includes(field))

    if (extraFields.length > 0) {
      throw new Error(`Campos no permitidos: ${extraFields.join(', ')}`)
    }
    return true
  }),
]

export const validateQueryNotEmpty = [
  query().custom((_value, { req }) => {
    if (Object.keys(req.query).length === 0) {
      throw new Error('No se permite eliminar sin filtros')
    }
    return true
  }),
]

export const validateFiltersDelete = [
  query('*').custom((_value, { req }) => {
    const allowedFilters = ['nombre', 'precio', 'cantidad']
    const keys = Object.keys(req.query)

    for (const key of keys) {
      if (!allowedFilters.includes(key)) {
        throw new Error(`Filtro no permitido: ${key}`)
      }
    }

    return true
  }),
]
