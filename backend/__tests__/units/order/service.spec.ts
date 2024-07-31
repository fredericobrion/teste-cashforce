import HttpError from "../../../src/errors/httpError";
import { IOrderRepository } from "../../../src/repository/order/order.interface";
import OrderService from "../../../src/service/order.service";
import { orders } from './mocks';

describe("OrderService", () => {
  let service: OrderService;
  let mockRepository: jest.Mocked<IOrderRepository>;

  beforeEach(() => {
    mockRepository = {
      getAll: jest.fn(),
    };
    service = new OrderService(mockRepository);
  })

  it('should return successful response when orders are fetched', async () => {
    mockRepository.getAll.mockResolvedValue(orders);

    const response = await service.findAll();

    expect(response.status).toBe("SUCCESSFUL");
    expect(response.data).toEqual(orders);
  });

  it('should throw HttpError when there is a problem fetching orders', async () => {
    mockRepository.getAll.mockRejectedValue(new Error("Database error"));

    await expect(service.findAll()).rejects.toThrow(HttpError);
    await expect(service.findAll()).rejects.toThrow("Could not retrieve orders.");
  });
});