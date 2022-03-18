<template>
  <header>
    <img src="@/assets/leaf.svg" alt="Leaf">
    <h1>Receppies</h1>
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 1em;
  color: var(--primary);
  margin-bottom: 1.4em;
  padding: 1em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: var(--dark);
  border-bottom: 2px solid var(--gray);
  z-index: 10;
}
</style>