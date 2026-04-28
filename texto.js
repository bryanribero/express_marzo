export async function llamada(texto) {
  return new Promise((resolve) => {
    setTimeout(resolve(texto), 1000)
  })
}
