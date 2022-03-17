<script setup>
import CustomInput from '@/components/CustomInput.vue';
</script>

<template>
  <h2>Login</h2>
  <p>
    Om gebruik te maken van deze app moet je inloggen met je email
  </p>
  <CustomInput :icon="'mail.svg'" :placeholder="'example@mail.nl'"/>
  <button class="submit">Inloggen</button>
</template>

<style scoped>
  h2 {
    color: var(--primary);
    margin-bottom: .5em;
  }

  p {
    color: var(--white);
    margin-bottom: .5em;
  }

  div {
    margin-bottom: 1em;
  }

  .submit {
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