export default function globalErrorHandler(err, req, res, _next) {
  if (err.type === 'NotModified') {
    return res.status(err.status || 400).json({
      message: err.message,
    })
  }

  if (err.type === 'DatabaseError') {
    return res.status(500).json({
      message: err.message,
      details: err.cause || null,
    })
  }

  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
    details: err.errors || null,
  })
}
