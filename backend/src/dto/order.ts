export interface OrderDetailedDto {
  orderNumber: string;
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
  buyer: {
    name: string;
  };
  provider: {
    name: string;
    cnpj: string
  };
}
