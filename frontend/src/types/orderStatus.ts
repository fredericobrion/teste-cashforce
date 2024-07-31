export enum OrderStatus {
  PendenteDeConfirmacao = 0,
  PedidoConfirmado,
  NaoReconheceOPedido,
  MercadoriaNaoRecebida,
  RecebidaComAvaria,
  Devolvida,
  RecebidaComDevolucaoParcial,
  RecebidaEConfirmada,
  PagamentoAutorizado
}

export const OrderStatusLabels: Record<OrderStatus, string> = {
  [OrderStatus.PendenteDeConfirmacao]: 'Pendente de confirmação',
  [OrderStatus.PedidoConfirmado]: 'Pedido confirmado',
  [OrderStatus.NaoReconheceOPedido]: 'Não reconhece o pedido',
  [OrderStatus.MercadoriaNaoRecebida]: 'Mercadoria não recebida',
  [OrderStatus.RecebidaComAvaria]: 'Recebida com avaria',
  [OrderStatus.Devolvida]: 'Devolvida',
  [OrderStatus.RecebidaComDevolucaoParcial]: 'Recebida com devolução parcial',
  [OrderStatus.RecebidaEConfirmada]: 'Recebida e confirmada',
  [OrderStatus.PagamentoAutorizado]: 'Pagamento Autorizado'
};
