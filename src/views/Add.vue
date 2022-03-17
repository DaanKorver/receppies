<script setup>
import CustomInput from '@/components/CustomInput.vue';
</script>

<template>
  <h2>Recept toevoegen</h2>
  <p>
    Om een recept toe te voegen plak je de link in het vakje. Vervolgens mag je zelf bepalen welke categorieen bij het recept horen. Daarna kan je op de “Voeg toe” knop drukken om alles te bevestigen.
  </p>
  <CustomInput :icon="'link.svg'" :placeholder="'Plak hier je link...'"/>
  <div class="input-container">
    <CustomInput :icon="'meat.svg'" :placeholder="'Voeg je categorie toe...'"/>
    <button>+</button>
  </div>
  <button class="submit">Recept toevoegen</button>
  <p class="support">Receppies ondersteunt de volgende websites:</p>
  <ul class="support">
    <li>ah.nl</li>
    <li>foodfromclaudnine.nl</li>
    <li>laurasbakkery.nl</li>
    <li>projectgezond.nl</li>
  </ul>
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

  .input-container {
    display: flex;
    margin-bottom: 1em;
    margin-top: 1em;
    gap: 1em;
  }

  .input-container > div {
    flex-grow: 1;
  }

  .input-container > button {
    width: 3rem;
    background: var(--primary);
    outline: none;
    border: none;
    color: var(--white);
    border-radius: .5rem;
    font-size: 2rem;
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

  .support {
    color: var(--gray);
  }

  ul.support {
    margin-left: 1.3em;
  }
</style>