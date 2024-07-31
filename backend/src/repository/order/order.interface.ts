import { OrderDetailedDto } from "../../dto/order";

export interface IOrderRepository {
  getAll(): Promise<OrderDetailedDto[]>;
}
