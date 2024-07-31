import Buyers from "../../database/models/buyers.model";
import OrderSequelize from "../../database/models/orders.model";
import Providers from "../../database/models/providers.model";
import IOrder from "../../interfaces/order";
import { IOrderRepository } from "./order.interface";

export class OrderSequelizeRepository implements IOrderRepository {
  async getAll(): Promise<IOrder[]> {
    const orders = await OrderSequelize.findAll({
      attributes: ["orderNumber", "emissionDate", "value", "orderStatusBuyer"],
      include: [
        { model: Buyers, as: "buyer", attributes: ["name"] },
        { model: Providers, as: "provider", attributes: ["name"] },
      ],
    });

    return orders;
  }
}
