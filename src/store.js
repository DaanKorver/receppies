import { reactive } from "vue"
import { supabase } from './supabase'

const user = supabase.auth.user()

export const store = reactive({
  user: user || {},
})