import { llamada } from '../texto.js'

test('llamada de texto.js, controlar un test con promesas', async () => {
  const result = await llamada('Hola que tal')
  expect(result).toBe('Hola que tal')
})
