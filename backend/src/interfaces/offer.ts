export default interface IOffer {
  id: number;
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: string;
  paymentStatusSponsor: number;
  paymentStatusProvider: number;
  createdAt: Date;
  updatedAt: Date;
  orderId: number;
  sponsorId: number;
}