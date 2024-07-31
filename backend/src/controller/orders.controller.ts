import OrdersService from "../service/orders.service";
import { Request, Response } from 'express';

export default class OrdersController {
  constructor(
    private readonly service: OrdersService
  ) {}

  async findAll(_req: Request, res: Response) {
    const orders = await this.service.findAll();

    return res.status(200).json(orders)
  }
}
