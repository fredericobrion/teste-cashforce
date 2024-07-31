<template>
  <div class="data-table">
    <h2>Dados da Tabela</h2>
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.notaFiscal }}</td>
          <td>{{ item.sacado }}</td>
          <td>{{ item.cedente }}</td>
          <td>{{ item.emissao }}</td>
          <td>{{ item.valor }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  // props: {
  //   data: Array
  // }
}
</script>

<style scoped>
.data-table {
  margin-left: 270px;
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>
