import { Model, INTEGER, STRING, DATE, TINYINT } from "sequelize";
import db from ".";
import IOrderportion from "../../interfaces/orderportion";

export default class OrderPortionSequelize extends Model implements IOrderportion {
  declare id: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: string;
  declare paymentStatusSponsor: number;
  declare paymentStatusProvider: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare orderId: number;
  declare sponsorId: number;
}
OrderPortionSequelize.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: INTEGER,
    },
    tax: {
      allowNull: false,
      type: STRING,
    },
    tariff: {
      allowNull: false,
      type: STRING,
    },
    adValorem: {
      allowNull: false,
      type: STRING,
    },
    float: {
      allowNull: false,
      type: STRING,
    },
    iof: {
      allowNull: false,
      type: STRING,
    },
    expiresIn: {
      type: DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: TINYINT,
      defaultValue: 0,
    },
    paymentStatusProvider: {
      type: TINYINT,
      defaultValue: 0,
    },
    orderId: {
      type: INTEGER,
      defaultValue: null,
    },
    sponsorId: {
      type: INTEGER,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: "orderportions",
    timestamps: true,
  }
);
