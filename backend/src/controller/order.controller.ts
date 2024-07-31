import OrderService from "../service/order.service";
import { NextFunction, Request, Response } from "express";
import mapStatusHTTP from "../utils/mapStatusHTTP";

export default class OrderController {
  constructor(private readonly service: OrderService) {}

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const { data, status } = await this.service.findAll();
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
