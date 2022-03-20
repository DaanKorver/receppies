<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  image: String,
  prep: Number
})

</script>

<template>
  <section>
    <img v-if="image" :src="image" alt="Recipe">
    <img class="fallback" v-else src="@/assets/leaf.svg" alt="Leaf">
    <h3>{{ title.length <= 20 ? title : `${title.substring(0, 20)}...` }}</h3>
    <time><img src="@/assets/alarm-green.svg" alt="Alarm clock" />{{prep}} min.</time>
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

section > img.fallback {
  width: 50%;
  height: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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