import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database.js'

class Usuario extends Model {}

Usuario.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue('email', value.toLowercase())
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'user',
      validate: {
        isIn: [['admin', 'user']],
      },
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
  }
)

export default Usuario
