import { NextFunction, Request, Response, Router } from "express";
import OrderController from "../controller/order.controller";
import OrderService from "../service/order.service";
import { OrderSequelizeRepository } from "../repository/order/order.sequelize";

const orderRepository = new OrderSequelizeRepository();
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  orderController.findAll(req, res, next);
});

export default router;
