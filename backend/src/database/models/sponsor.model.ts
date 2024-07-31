import { Model, INTEGER, STRING } from "sequelize";
import db from ".";
import ISponsor from "../../interfaces/sponsor";

export default class SponsorSequelize extends Model implements ISponsor {
  declare id: number;
  declare name: string;
  declare tradingName: string;
  declare cashforceTax: string;
  declare responsibleName: string;
  declare responsibleEmail: string;
  declare responsiblePosition: string;
  declare responsiblePhone: string;
  declare responsibleMobile: string;
  declare website: string;
  declare postalCode: string;
  declare address: string;
  declare number: string;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare bank: string;
  declare bankAgency: string;
  declare account: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare email: string;
}
SponsorSequelize.init(
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
    tradingName: {
      type: STRING,
      defaultValue: null,
    },
    cashforceTax: {
      type: STRING,
      defaultValue: null,
    },
    responsibleName: {
      type: STRING,
      defaultValue: null,
    },
    responsibleEmail: {
      type: STRING,
      defaultValue: null,
    },
    responsiblePosition: {
      type: STRING,
      defaultValue: null,
    },
    responsiblePhone: {
      type: STRING,
      defaultValue: null,
    },
    responsibleMobile: {
      type: STRING,
      defaultValue: null,
    },
    website: {
      type: STRING,
      defaultValue: null,
    },
    postalCode: {
      type: STRING,
      defaultValue: null,
    },
    address: {
      type: STRING,
      defaultValue: null,
    },
    number: {
      type: STRING,
      defaultValue: null,
    },
    complement: {
      type: STRING,
      defaultValue: null,
    },
    neighborhood: {
      type: STRING,
      defaultValue: null,
    },
    city: {
      type: STRING,
      defaultValue: null,
    },
    state: {
      type: STRING,
      defaultValue: null,
    },
    bank: {
      type: STRING,
      defaultValue: null,
    },
    bankAgency: {
      type: STRING,
      defaultValue: null,
    },
    account: {
      type: STRING,
      defaultValue: null,
    },
    phoneNumber: {
      type: STRING,
      defaultValue: null,
    },

    situation: {
      type: STRING,
      defaultValue: null,
    },
    situationDate: {
      type: STRING,
      defaultValue: null,
    },
    cnpjId: {
      type: INTEGER,
      defaultValue: null,
    },
    email: {
      type: STRING,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: "sponsors",
    timestamps: true,
  }
);
