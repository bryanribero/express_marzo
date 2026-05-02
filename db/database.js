import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'dev'}`,
})

let sequelize

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  })
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      dialect: 'postgres',
    }
  )
}

export default sequelize

//comentario
