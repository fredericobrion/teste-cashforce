<template>
  <div class="main-page">
    <Sidebar />
    <DataTable />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import DataTable from '../components/DataTable.vue'

export default {
  name: 'MainPage',
  components: {
    Sidebar,
    DataTable
  },
  // data() {
  //   return {
  //     orders: []
  //   }
  // },
  // async created() {
  //   try {
  //     const response = await fetch('API_URL_HERE'); // Substitua pela URL da sua API
  //     this.orders = await response.json();
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }
}
</script>

<style scoped>
.main-page {
  display: flex;
}
</style>
