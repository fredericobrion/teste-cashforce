import { Request, Response, NextFunction } from 'express';
import OrderService from '../../../src/service/order.service';
import OrderController from '../../../src/controller/order.controller';
import { orders } from './mocks';

const mockService: jest.Mocked<OrderService> = {
  findAll: jest.fn(),
} as unknown as jest.Mocked<OrderService>;

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(() => {
    mockService.findAll = jest.fn();
    controller = new OrderController(mockService);
  });

  it('should return orders with status 200 when findAll is successful', async () => {
    mockService.findAll.mockResolvedValue({
      status: 'SUCCESSFUL',
      data: orders,
    });

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as unknown as NextFunction;

    await controller.findAll({} as Request, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(orders);
  });

  it('should call next with an error when findAll fails', async () => {
    const error = new Error('Something went wrong');

    mockService.findAll.mockRejectedValue(error);

    const res = {} as Response;
    const next = jest.fn() as NextFunction;

    await controller.findAll({} as Request, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
