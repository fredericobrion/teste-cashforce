import { Model, INTEGER, STRING, TINYINT } from "sequelize";
import db from ".";
import IUser from "../../interfaces/user";

export default class UserSequelize extends Model implements IUser {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cashforceAdm: number;
}

UserSequelize.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING,
    },
    phoneNumber: {
      type: STRING,
      defaultValue: null,
    },
    mobile: {
      type: STRING,
      defaultValue: null,
    },
    departament: {
      type: STRING,
      defaultValue: null,
    },
    verificationCode: {
      type: STRING,
      defaultValue: null,
    },
    emailChecked: {
      type: TINYINT,
      defaultValue: 0,
    },
    cashforceAdm: {
      type: TINYINT,
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    modelName: "users",
    timestamps: true,
  }
);
