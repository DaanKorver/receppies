<script setup>
import Search from '@/components/Search.vue'
import Filter from '@/components/Filter.vue'
import Recipe from '@/components/Recipe.vue'
import { ref } from 'vue'
import { getRecipes } from '../api.js';

const recipes = ref([])

getRecipes().then(data=>{
  recipes.value = data
})

</script>

<template>
  <Search />
  <!-- <Filter /> -->
  <div class="container">
    <Recipe v-for="recipe in recipes" :key="recipe" :title="recipe.title" :image="recipe.image_url" :prep="recipe.prep_time" />
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