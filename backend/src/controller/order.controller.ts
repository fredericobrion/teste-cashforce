import OrderService from "../service/order.service";
import { Request, Response } from 'express';

export default class OrderController {
  constructor(
    private readonly service: OrderService
  ) {}

  async findAll(_req: Request, res: Response) {
    const orders = await this.service.findAll();

    return res.status(200).json(orders)
  }
}
