import { rateLimit } from 'express-rate-limit'

export const limitGlobal = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: 'Demasiadas solicitudes, intentá de nuevo mas tarde',
})

export const limitLogin = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Demasiadas solicitudes, intentá de nuevo mas tarde',
})
