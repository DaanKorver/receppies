<template>
  <div>
    <img src="@/assets/search-grey.svg" alt="Search">
    <input type="text" name="search" id="search" placeholder="Zoek naar recepten...">
  </div>
</template>

<style scoped>
div {
  background-color: var(--black);
  border-radius: .6rem;
  display: flex;
  gap: .5em;
  padding: .3em .5em;
  margin-bottom: 1em;
}

img {
  width: 1.5rem;
}

input {
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--white);
}

input::placeholder {
  color: var(--gray);
}
</style>