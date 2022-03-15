<template>
  <section>
    <img src="@/assets/recipe_placeholder.webp" alt="Recipe">
    <h3>Carrot Pancakes</h3>
    <time><img src="@/assets/alarm-green.svg" alt="Alarm clock" />25 min.</time>
  </section>
</template>

<style scoped>
section {
  height: 12em;
  position: relative;
  background-color: rgba(0, 0, 0, .6);
  border-radius: .5em;
  overflow: hidden;
  color: var(--white);
  padding: .5em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

h3 {
  color: var(--primary);
}

section > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}

time {
  display: flex;
  align-items: center;
  gap: .2em;
}

time > img {
  width: 1.2em;
}
</style>