import { Request, Response, Router } from "express";
import OrdersController from "../controller/orders.controller";
import OrdersService from "../service/orders.service";
import { OrderSequelizeRepository } from "../repository/order/order.sequelize";

const ordersRepository = new OrderSequelizeRepository();
const ordersService = new OrdersService(ordersRepository);
const ordersController = new OrdersController(ordersService);

const router = Router();

router.get("/", (req: Request, res: Response) => {
  ordersController.findAll(req, res);
});

export default router;
