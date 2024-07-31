import { Model, INTEGER, STRING } from "sequelize";
import db from ".";
import CnpjSequelize from "./cnpj.model";
import UserSequelize from "./user.model";
import BuyerSequelize from "./buyer.model";
import ProviderSequelize from "./provider.model";
import IOrder from "../../interfaces/order";

export default class OrderSequelize extends Model implements IOrder {
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath: string;
  declare orderFileName: string;
  declare orderOriginalName: string;
  declare emissionDate: string;
  declare pdfFile: string;
  declare emitedTo: string;
  declare nNf: string;
  declare CTE: string;
  declare value: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare userId: number;
  declare buyerId: number;
  declare providerId: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: string;

  declare buyer?: BuyerSequelize;
  declare provider?: ProviderSequelize;
  declare cnpjn?: CnpjSequelize;
}

OrderSequelize.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    orderNfId: {
      type: STRING,
      allowNull: false,
    },
    orderNumber: {
      type: STRING,
      allowNull: false,
    },
    orderPath: {
      type: STRING,
      defaultValue: null,
    },
    orderFileName: {
      type: STRING,
      defaultValue: null,
    },
    orderOriginalName: {
      type: STRING,
      defaultValue: null,
    },
    emissionDate: {
      type: STRING,
      defaultValue: null,
    },
    pdfFile: {
      type: STRING,
      defaultValue: null,
    },
    emitedTo: {
      type: STRING,
      allowNull: false,
    },
    nNf: {
      type: STRING,
      defaultValue: null,
    },
    cte: {
      type: STRING,
      defaultValue: null,
    },
    value: {
      type: STRING,
      defaultValue: null,
    },
    cnpjId: {
      type: INTEGER,
      defaultValue: null,
    },
    userId: {
      type: INTEGER,
      defaultValue: null,
    },
    buyerId: {
      type: INTEGER,
      defaultValue: null,
    },
    providerId: {
      type: INTEGER,
      defaultValue: null,
    },
    orderStatusBuyer: {
      type: STRING,
      defaultValue: "0",
    },
    orderStatusProvider: {
      type: STRING,
      defaultValue: "0",
    },
    deliveryReceipt: {
      type: STRING,
      defaultValue: null,
    },
    cargoPackingList: {
      type: STRING,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: STRING,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: "orders",
    timestamps: true,
  }
);

CnpjSequelize.hasMany(OrderSequelize, { foreignKey: "cnpjId", as: "cnpjn" });
UserSequelize.hasMany(OrderSequelize, { foreignKey: "userId", as: "user" });
BuyerSequelize.hasMany(OrderSequelize, { foreignKey: "buyerId", as: "buyer" });
ProviderSequelize.hasMany(OrderSequelize, { foreignKey: "providerId", as: "provider" });

OrderSequelize.belongsTo(CnpjSequelize, { foreignKey: "cnpjId", as: "cnpjn" });
OrderSequelize.belongsTo(UserSequelize, { foreignKey: "userId", as: "user" });
OrderSequelize.belongsTo(BuyerSequelize, { foreignKey: "buyerId", as: "buyer" });
OrderSequelize.belongsTo(ProviderSequelize, { foreignKey: "providerId", as: "provider" });
