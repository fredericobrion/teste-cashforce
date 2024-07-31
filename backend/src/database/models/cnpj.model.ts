import { INTEGER, Model, STRING } from "sequelize";
import db from ".";
import ICnpj from "../../interfaces/cnpj";

export default class CnpjSequelize extends Model implements ICnpj {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

CnpjSequelize.init(
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
