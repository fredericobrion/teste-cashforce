import { OrderDetailedDto } from "../../../src/dto/order";
import HttpError from "../../../src/errors/httpError";
import { IOrderRepository } from "../../../src/repository/order/order.interface";

export const orders: OrderDetailedDto[] = [
  {
    orderNumber: "18153",
    emissionDate: "2020-10-30T11:00:00-03:00",
    value: "198450",
    orderStatusBuyer: "0",
    buyer: {
      name: "SACADO 001",
    },
    provider: {
      name: "CEDENTE 002",
    },
  },
  {
    orderNumber: "18157",
    emissionDate: "2020-11-04T15:32:35-02:00",
    value: "168850",
    orderStatusBuyer: "0",
    buyer: {
      name: "SACADO 001",
    },
    provider: {
      name: "CEDENTE 002",
    },
  },
  {
    orderNumber: "18184",
    emissionDate: "2020-11-10",
    value: "222795",
    orderStatusBuyer: "7",
    buyer: {
      name: "SACADO 001",
    },
    provider: {
      name: "CEDENTE 002",
    },
  },
];
