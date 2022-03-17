<script setup>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue';
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
  
  <Navigation />
</template>

<style>

html {
  min-height: calc(100% + env(safe-area-inset-top));
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);

}

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
  padding-bottom: 5.8em;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>
