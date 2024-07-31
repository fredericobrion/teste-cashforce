type Buyer = {
  name: string
}

type Provider = {
  name: string
}

export type Order = {
  orderNumber: string
  emissionDate: string
  value: string
  orderStatusBuyer: string
  buyer: Buyer
  provider: Provider
}
