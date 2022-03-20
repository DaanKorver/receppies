import { supabase } from './supabase'

async function getRecipes() {
  const { data, error } = await supabase.from('Recipe').select()
  return data
}

async function getRandomRecipes(amount) {
  const { data, error } = await supabase.rpc('getrandomrecipes', {amount: amount})
  return data
}

export {
  getRecipes,
  getRandomRecipes
}