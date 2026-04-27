import DOMpurify from 'dompurify'
import { JSDOM } from 'jsdom'

const windows = new JSDOM('').window
const purify = DOMpurify(windows)

export function sanitizeMiddleware(keysToSanitize = []) {
  return (req, res, next) => {
    for (let key of keysToSanitize) {
      if (typeof req.body[key] !== 'string') {
        return res.status(400).json({
          error: `El campo '${key}' debe ser un texto`,
        })
      }
      req.body[key] = purify.sanitize(req.body[key])
    }

    next()
  }
}
