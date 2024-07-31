<template>
  <div class="data-table">
    <div class="title-container">
      <h2>
        <img src="@/assets/proposta-azul.svg" alt="Icon" />
        Notas fiscais
      </h2>
      <h3>Visualize as notas fiscais que você tem.</h3>
    </div>
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.orderNumber">
          <td>{{ order.orderNumber }}</td>
          <td>{{ order.buyer.name }}</td>
          <td>{{ order.provider.name }}</td>
          <td>{{ new Date(order.emissionDate).toLocaleDateString() }}</td>
          <td>{{ formatCurrency(order.value) }}</td>
          <td>{{ getOrderStatusLabel(order.orderStatusBuyer) }}</td>
          <td>
            <button v-if="!order.showDetails" @click="toggleDetails(order.orderNumber)">
              Dados do cedente
            </button>
            <button v-if="order.showDetails" @click="toggleDetails(order.orderNumber)">
              Ocultar dados
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { fetchOrders } from '@/utils/api'
import { OrderStatus, OrderStatusLabels } from '@/types/orderStatus'

export default defineComponent({
  name: 'DataTable',
  setup() {
    const orders = ref<any[]>([])

    const loadOrders = async () => {
      try {
        const data = await fetchOrders()
        orders.value = data
      } catch (error) {
        console.error('Failed to load orders', error)
      }
    }

    onMounted(() => {
      loadOrders()
    })

    const getOrderStatusLabel= (status: number): string => {
      return OrderStatusLabels[status as OrderStatus] || 'Desconhecido'
    }

    const toggleDetails = (orderNumber: string) => {
      const order = orders.value.find((o) => o.orderNumber === orderNumber)
      if (order) {
        order.showDetails = !order.showDetails
      }
    }

    function formatCurrency(value: string): string {
      const numberValue = parseFloat(value.replace(/\./g, '').replace(',', '.'))
      if (isNaN(numberValue)) {
        return value
      }
      return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return {
      orders,
      formatCurrency,
      toggleDetails,
      getOrderStatusLabel,
    }
  }
})
</script>

<style scoped>
.data-table {
  border-top: 1px solid var(--border-gray);
  margin-top: 64px;
  padding: 0 48px;
  width: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
  margin: 40px 0 19px 0;
}

.title-container h2 {
  align-items: center;
  color: var(--dark-blue);
  display: flex;
  font-size: 24px;
  font-weight: 700;
  gap: 9px;
}

.title-container h2 img {
  width: 24px;
}

.title-container h3 {
  color: var(--middle-gray-text);
  font-size: 14px;
  font-weight: 400;
}

table {
  border-collapse: separate;
  border-spacing: 0 16px;
  width: 100%;
}

th {
  color: var(--light-gray-text);
  font-size: 12px;
  font-weight: 700;
  padding-left: 30px;
  text-align: left;
}

tbody tr {
  height: 48px;
}

td {
  border-bottom: 1px solid var(--border-gray);
  border-top: 1px solid var(--border-gray);
  color: var(--dark-gray-text);
  font-size: 14px;
  font-weight: 500;
  padding-left: 30px;
}

td:first-of-type {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-left: 1px solid var(--border-gray);
}

td:nth-child(5),
td:nth-child(6) {
  color: var(--green-text);
}

td:last-of-type {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-right: 1px solid var(--border-gray);
}

td button {
  background: none;
  border: 1px solid var(--light-blue);
  border-radius: 24px;
  color: var(--middle-gray-text);
  cursor: pointer;
  font-size: 12px;
}

td button:hover {
  border: 1px solid var(--dark-blue);
  color: var(--dark-gray-text);
}
</style>
