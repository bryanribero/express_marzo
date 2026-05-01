'use strict'

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lenguajes', {
      id_lenguaje: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })

    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION set_updated_at()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."updatedAt" = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
      `)

    await queryInterface.sequelize.query(`
        CREATE TRIGGER trigger_set_updated_at
        BEFORE UPDATE ON "lenguajes"
        FOR EACH ROW
        EXECUTE FUNCTION set_updated_at();
        `)
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS trigger_set_updated_at ON lenguajes;
      `)

    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS set_updated_at;
      `)

    await queryInterface.dropTable('lenguajes')
  },
}
