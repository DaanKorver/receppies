<script setup>
import Search from '@/components/Search.vue'
import Recipe from '@/components/Recipe.vue'
</script>

<template>
  <Search />
  <h2>Welkom, Daan</h2>
  <p>Hier zijn wat suggesties voor de eerst volgende keer koken.</p>
  <div class="container">
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
    <Recipe />
  </div>
</template>

<style scoped>
h2 {
  color: var(--primary);
  margin-bottom: .5em;
}

p {
  color: white;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin-top: 1em;
}
</style>