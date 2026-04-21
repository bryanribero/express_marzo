class AuthError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AuthError'
    this.status = 401
  }
}

export default AuthError
