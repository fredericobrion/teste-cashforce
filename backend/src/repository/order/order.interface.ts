import IOrder from "../../interfaces/order";

export interface IOrderRepository {
  getAll(): Promise<IOrder[]>;
}
