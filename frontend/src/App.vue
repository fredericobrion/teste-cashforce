<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  background-color: var(--main-bg);
}
</style>
