import { Model, INTEGER, STRING, DATE, TINYINT } from "sequelize";
import db from ".";
import IOffer from "../../interfaces/offer";

export default class OfferSequelize extends Model implements IOffer {
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

OfferSequelize.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tax: {
      type: STRING,
      allowNull: false,
    },
    tariff: {
      type: STRING,
      allowNull: false,
    },
    adValorem: {
      type: STRING,
      allowNull: false,
    },
    float: {
      type: STRING,
      allowNull: false,
    },
    iof: {
      type: STRING,
      allowNull: false,
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
    modelName: "offers",
    timestamps: true,
  }
);
