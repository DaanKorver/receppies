<script setup>
import Search from '@/components/Search.vue'
import Filter from '@/components/Filter.vue'
import Recipe from '@/components/Recipe.vue'
</script>

<template>
  <Search />
  <Filter />
  <main>
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 1em;
}
</style>