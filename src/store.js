import { reactive } from "vue"

const user = localStorage.getItem('supabase.auth.token')

export const store = reactive({
  user: user || {},
})