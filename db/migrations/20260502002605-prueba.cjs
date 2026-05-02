'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pruebas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      nombre: {
        type: Sequelize.STRING,
        unique: true,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('prueba')
  },
}
