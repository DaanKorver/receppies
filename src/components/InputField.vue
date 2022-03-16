<script setup>
const props = defineProps({
  icon: String,
  placeholder: String
})

function getImage() {
  const path = `../assets/${props.icon}`
  const modules = import.meta.globEager('../assets/*.svg')
  return modules[path].default
}
</script>

<template>
  <div>
    <img :src="getImage()" alt="Icon">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<style scoped>
div {
  background-color: var(--black);
  border-radius: .6rem;
  display: flex;
  gap: .5em;
  padding: .7em .5em;
}

img {
  width: 1.7rem;
}

input {
  font-size: 1.1rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--white);
}

input::placeholder {
  color: var(--gray);
}
</style>