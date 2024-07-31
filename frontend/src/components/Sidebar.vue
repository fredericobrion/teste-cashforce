<template>
  <div class="sidebar">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <button class="btn-notas-fiscais">
      <img src="@/assets/proposta.svg" alt="Icon" class="icon" />
      Notas Fiscais
    </button>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
.sidebar {
  background-color: var(--side-bg);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 288px;
}

.logo {
  width: 160px;
  margin: 25px auto 25px 24px;
}

.btn-notas-fiscais {
  align-items: center;
  background: none;
  border: none;
  border-left: 4px solid ;
  color: var(--green-text);
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  height: 64px;
  padding-left: 21px;
  width: 100%;
}

.icon {
  margin-right: 10px;
  width: 24px;
}
</style>
