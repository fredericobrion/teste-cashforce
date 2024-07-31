import BuyerSequelize from "../../database/models/buyer.model";
import OrderSequelize from "../../database/models/order.model";
import ProviderSequelize from "../../database/models/provider.model";
import IOrder from "../../interfaces/order";
import { IOrderRepository } from "./order.interface";

export class OrderSequelizeRepository implements IOrderRepository {
  async getAll(): Promise<IOrder[]> {
    const orders = await OrderSequelize.findAll({
      attributes: ["orderNumber", "emissionDate", "value", "orderStatusBuyer"],
      include: [
        { model: BuyerSequelize, as: "buyer", attributes: ["name"] },
        { model: ProviderSequelize, as: "provider", attributes: ["name"] },
      ],
    });

    return orders;
  }
}
