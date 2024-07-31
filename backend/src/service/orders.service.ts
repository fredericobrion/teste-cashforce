import { IOrderRepository } from "../repository/order/order.interface";

export default class OrdersService {
  constructor(private readonly repository: IOrderRepository) {}

  async findAll() {
    const orders = await this.repository.getAll();

    return orders;
  }
}
