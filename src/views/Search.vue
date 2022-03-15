<script setup>
import Search from '@/components/Search.vue'
import Filter from '@/components/Filter.vue'
import Recipe from '@/components/Recipe.vue'
</script>

<template>
  <Search />
  <Filter />
  <div class="container">
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 1em;
}
</style>