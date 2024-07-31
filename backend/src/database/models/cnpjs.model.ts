import { DATE, INTEGER, Model, STRING } from "sequelize";
import db from ".";

export default class Cnpjs extends Model {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: string;
  declare updatedAt: string;
}

Cnpjs.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cnpj: {
      type: STRING,
      allowNull: false,
    },
    companyType: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "cnpjs",
    timestamps: true,
  }
);
