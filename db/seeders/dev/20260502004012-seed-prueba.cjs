'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('pruebas', [
      { nombre: 'Prueba 1' },
      { nombre: 'Prueba 2' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('pruebas', {
      nombre: ['Prueba 1', 'Prueba 2'],
    })
  },
}
