import BuyerSequelize from "../../database/models/buyer.model";
import CnpjSequelize from "../../database/models/cnpj.model";
import OrderSequelize from "../../database/models/order.model";
import ProviderSequelize from "../../database/models/provider.model";
import { OrderDetailedDto } from "../../dto/order";
import IOrder from "../../interfaces/order";
import { IOrderRepository } from "./order.interface";

export class OrderSequelizeRepository implements IOrderRepository {
  async getAll(): Promise<OrderDetailedDto[]> {
    const orders = await OrderSequelize.findAll({
      attributes: ["orderNumber", "emissionDate", "value", "orderStatusBuyer"],
      include: [
        { model: BuyerSequelize, as: "buyer", attributes: ["name"] },
        { model: ProviderSequelize, as: "provider", attributes: ["name"] },
        { model: CnpjSequelize, as: "cnpjNumber", attributes: ["cnpj"] },
      ],
    });

    return orders.map((order) => ({
      orderNumber: order.orderNumber,
      emissionDate: order.emissionDate,
      value: order.value,
      orderStatusBuyer: order.orderStatusBuyer,
      buyer: {
        name: order.buyer?.name ?? "",
      },
      provider: {
        name: order.provider?.name ?? "",
        cnpj: order.cnpjNumber?.cnpj ?? "",
      },
    }));
  }
}
