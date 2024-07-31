import HttpError from "../errors/httpError";
import IOrder from "../interfaces/order";
import { ServiceResponse } from "../interfaces/serviceResponse";
import { IOrderRepository } from "../repository/order/order.interface";

export default class OrderService {
  constructor(private readonly repository: IOrderRepository) {}

  async findAll(): Promise<ServiceResponse<IOrder[]>> {
    try {
      const orders = await this.repository.getAll();

      return { status: "SUCCESSFUL", data: orders };
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw new HttpError("Could not retrieve orders.", 500);
    }
  }
}
