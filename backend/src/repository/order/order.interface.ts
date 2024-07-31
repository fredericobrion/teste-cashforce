import IOrder from "../../interfaces/order";
import { OrderDetailedDto } from "../../dto/order";

export interface IOrderRepository {
  getAll(): Promise<OrderDetailedDto[]>;
}
