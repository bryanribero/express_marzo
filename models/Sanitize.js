import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database.js'

class Sanitize extends Model {}

Sanitize.init(
  {
    id_sanitize: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Sanitize',
    tableName: 'sanitizes',
    timestamps: false,
  }
)

export default Sanitize
