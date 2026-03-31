export default function globalError(err, req, res, _next) {
  const statusError = err.status || 500

  res.status(statusError).json({
    error: {
      message: err.message || 'Ocurrio un error interno',
      details: err.errors || null,
    },
  })
}
