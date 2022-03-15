<script setup>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Navigation />
</template>

<style>

:root {
  --dark: #1a1a1a;
  --gray: #2F2F2F;
  --primary: #41A971;
  --white: #ffffff; 
  --black: #000000;
}

@font-face {
  font-family: 'Readex Pro';
  src: url('@/assets/ReadexPro-Regular.ttf');
  font-weight: normal;
}

@font-face {
  font-family: 'Readex Pro';
  src: url('@/assets/ReadexPro-Bold.ttf');
  font-weight: bold;
}

body {
  font-family: 'Readex Pro';
  background: var(--dark);
  padding: 1em;
  padding-bottom: 5.8em;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>
