import type { Order } from '@/types/order';
import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BACKEND_URL = "http://localhost:3001";

const api: AxiosInstance = axios.create({ baseURL: BACKEND_URL });

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await api.get<Order[]>('/orders');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter pedidos:', error);
    throw error;
  }
}