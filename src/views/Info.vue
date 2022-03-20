<script setup>
import { supabase } from '@/supabase.js'
import router from '../router';
import { store } from '../store';

async function logout() {
  const { error } = await supabase.auth.signOut()
  store.user = {}
  router.push('/')
}

</script>

<template>
  <h2>Over deze app</h2>
  <p>
    Deze app is gemaakt om recepten makkelijk op te slaan en later terug te vinden. Momenteel kan je alleen nog via links recepten toevoegen maar later komt er misschien nog support voor custom recepten.
  </p>
  <p>
    Als er een site is die niet word gesupport, neem dan contact op met de developer van deze app.
  </p>
  <p>
    Gemaakt door: <a href="https://www.daankorver.nl">Daan Korver</a>
  </p>
  <button @click="logout">Uitloggen</button>
</template>

<style scoped>
h2 {
  color: var(--primary);
    margin-bottom: 1em;
}

p {
  color: var(--white);
  margin-bottom: 1em;
}

a {
  color: var(--primary);
}

button {
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  outline: none;
  border: none;
  color: var(--white);
  font-size: 1.1rem;
  border-radius: .5rem;
  margin-bottom: 1em;
}
</style>