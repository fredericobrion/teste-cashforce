import { Router } from "express";
import ordersRouter from "./order.routes";

const router = Router();

router.use("/orders", ordersRouter);

export default router;
