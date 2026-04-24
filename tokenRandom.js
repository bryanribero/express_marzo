import crypto from 'crypto'

function random() {
  return crypto.randomBytes(64).toString('hex')
}

const claveSecreta = random()

console.log(claveSecreta)
