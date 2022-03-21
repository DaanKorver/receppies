<script setup>
import CustomInput from '@/components/CustomInput.vue'
import { supabase }  from './../supabase'
import { ref } from 'vue'
import { store } from '../store'
import router from './../router'

const email = ref('')
const password = ref('')
const hasError = ref(false)

function getMail(value) {
  email.value = value
}

function getPassword(value) {
  password.value = value
}

async function handleLogin() {
  hasError.value = false
  const { user, session, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  })
  if(user) {
    store.user = session
    router.push('/home')
  }
  if(error) hasError.value = true
}
</script>

<template>
  <h2>Login</h2>
  <p>
    Om gebruik te maken van deze app moet je inloggen met je email
  </p>
  <CustomInput :icon="'mail.svg'" :placeholder="'example@mail.nl'" @input="getMail" :type="'email'"/>
  <CustomInput :icon="'key.svg'" :placeholder="'Password'" @input="getPassword" :type="'password'"/>
  <p class="error" v-if="hasError">Something went wrong!</p>
  <button @click="handleLogin" class="submit">Inloggen</button>
</template>

<style scoped>
  h2 {
    color: var(--primary);
    margin-bottom: .5em;
  }

  p {
    color: var(--white);
    margin-bottom: 1.5em;
  }

  .error {
    color: crimson;
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