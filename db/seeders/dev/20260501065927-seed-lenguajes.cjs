'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('lenguajes', [
      { nombre: 'Javascript' },
      { nombre: 'SQL' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('lenguajes', {
      nombre: ['Javascript', 'SQL'],
    })
  },
}
