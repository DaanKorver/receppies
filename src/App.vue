<script setup>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import { store } from './store'
</script>

<template>
  <Header />
    <RouterView  v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <main :key="route.name">
          <component :is="Component"></component>
        </main>
      </transition>
    </RouterView>
  <Navigation v-if="Object.keys(store.user).length !== 0"/>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  padding-bottom: 6.8em;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

main {
  padding-top: 5em;
}

</style>
