import DOMpurify from 'dompurify'

export function sanitizeMiddleware(keysToSanitize = []) {
  return async (req, res, next) => {
    const { JSDOM } = await import('jsdom')

    const windows = new JSDOM('').window
    const purify = DOMpurify(windows)

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
