import HttpError from "../errors/httpError";
import IOrder from "../interfaces/order";
import { ServiceResponse } from "../interfaces/serviceResponse";
import { IOrderRepository } from "../repository/order/order.interface";
import { OrderDetailedDto } from "../dto/order";

export default class OrderService {
  constructor(private readonly repository: IOrderRepository) {}

  async findAll(): Promise<ServiceResponse<OrderDetailedDto[]>> {
    try {
      const orders = await this.repository.getAll();

      return { status: "SUCCESSFUL", data: orders };
    } catch (error) {
      throw new HttpError("Could not retrieve orders.", 500);
    }
  }
}
